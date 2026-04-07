<script lang='ts'>
  import type { Snippet } from 'svelte'

  let { children }: {
    children?: Snippet
  } = $props()
</script>

<div class='overflow-x-auto mb-4'>
  <table class='table w-full'>
    {@render children?.()}
  </table>
</div>
