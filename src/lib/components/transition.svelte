<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { fly } from 'svelte/transition'

  let { path = '', children }: {
    path?: string
    children?: Snippet
  } = $props()
</script>

{#key path}
  <div
    class='bg-base-100 md:bg-base-200 min-h-screen pt-16 md:pb-8 lg:pb-16'
    in:fly={{ delay: 300, duration: 300, y: 100 }}
    out:fly={{ duration: 300, y: -100 }}>
    {@render children?.()}
  </div>
{/key}
