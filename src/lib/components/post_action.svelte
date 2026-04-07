<script lang='ts'>
  let { post }: { post: Urara.Post } = $props()
  const actions = import.meta.glob<any>('/src/lib/components/actions/*.svelte', { eager: true, import: 'default' })
</script>

<div class='sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center'>
  {#if Object.keys(actions).length}
    {#each Object.values(actions) as Action}
      <Action {post} />
    {/each}
  {/if}
</div>
