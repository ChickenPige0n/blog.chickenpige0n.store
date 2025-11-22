import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/ChickenPige0n.png',
    bio: 'Undergraduate student. Developer.',
    name: 'ChickenPige0n',
    status: '🐤',
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.chickenpige0n.store',
  lang: 'zh-CN',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'qwq',
  themeColor: '#6aabe4ff',
  title: 'ChickenPige0n',
}
