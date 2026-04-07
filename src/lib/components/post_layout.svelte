<script module lang='ts'>
  import Image from '$lib/components/prose/img.svelte'
  import table from '$lib/components/prose/table.svelte'

  export { Image as img, table }
</script>

<script lang='ts'>
  import type { Snippet } from 'svelte'
  import Container from '$lib/components/post_container.svelte'
  import { typeOfPost } from '$lib/utils/posts'
  // auto-generated & common & specify (props injected by mdsvex from frontmatter)
  let { path, slug, toc, created, updated, published, summary, tags, flags, title, image, in_reply_to, children }: {
    path: string
    slug: string
    toc?: false | Urara.Post.Toc[]
    created: string
    updated?: string
    published?: string
    summary?: string
    tags?: string[]
    flags?: string[]
    title?: string
    image?: string
    in_reply_to?: string
    children: Snippet
  } = $props()
  // post
  let fm = $derived({ created, flags, image, in_reply_to, path, published, slug, summary, tags, title, toc, updated })
  let post = $derived({ type: typeOfPost(fm), ...fm })
</script>

<Container {post}>
  {@render children?.()}
</Container>
