<script lang='ts'>
  import type { Snippet } from 'svelte'
  import { browser, dev } from '$app/environment'
  import Head from '$lib/components/head_static.svelte'
  import Header from '$lib/components/header.svelte'
  import Transition from '$lib/components/transition.svelte'
  import { posts, tags } from '$lib/stores/posts'
  import { genTags } from '$lib/utils/posts'
  import { onMount } from 'svelte'
  import { registerSW } from 'virtual:pwa-register'
  import 'uno.css'

  import type { LayoutData } from './$types'

  import '../app.pcss'

  let { data, children }: { data: LayoutData, children: Snippet } = $props()

  let path = $derived(data?.path ?? '')

  $effect(() => {
    posts.set(data.res)
    tags.set(genTags(data.res))
  })

  onMount(
    () =>
      !dev
        && browser
      && registerSW({
          immediate: true,
          onRegistered: r => r && setInterval(async () => await r.update(), 198964),
          onRegisterError: error => console.error(error),
        }),
  )
</script>

<Head />

<Header {path} />

<Transition {path}>
  {@render children?.()}
</Transition>
