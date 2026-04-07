<script lang='ts'>
  /* @see {@link https://github.com/sveltejs/kit/issues/241#issuecomment-1363621896} */

  type Image = {
    h: number
    src: string
    w: number
  }

  const sources = import.meta.glob<Image[] | Image | string>(['/src/static/**/*.{jpg,jpeg,png,webp,avif}', '!/src/static/assets'], {
    eager: true,
    import: 'default',
    query: {
      format: 'avif',
      quality: '80',
      source: '',
      width: '736',
    },
  })

  let { class: className, src, alt = src, loading = 'lazy', decoding = 'async' }: {
    class?: string
    src: string
    alt?: string
    loading?: 'eager' | 'lazy'
    decoding?: 'async' | 'auto' | 'sync'
  } = $props()

  function resolveSource(raw: Image[] | Image | string | undefined): Image[] | undefined {
    if (!raw) return undefined
    if (typeof raw === 'string') return undefined // URL string, skip optimized version
    if (Array.isArray(raw)) return raw.length > 0 ? raw : undefined
    if (typeof raw === 'object' && 'src' in raw) return [raw]
    return undefined
  }

  let source = $derived(resolveSource(sources[`/src/static${src}`]))
</script>

{#if source}
  <picture>
    <source srcset={source.map(({ src, w }) => `${src} ${w}w`).join(', ')} type='image/avif' />
    <img {alt} class={className ?? 'rounded-lg my-2'} {decoding} {loading} {src} />
  </picture>
{:else}
  <img {alt} class={className ?? 'rounded-lg my-2'} {decoding} {loading} {src} />
{/if}
