import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  author: {
    avatar: '/assets/ChickenPige0n.png',
    bio: 'Undergraduate student. Developer.',
    name: 'ChickenPige0n',
    status: '🐤',
    metadata: [
      {
        icon: 'i-simple-icons-github',
        link: 'https://github.com/ChickenPige0n',
      },
      {
        icon: 'i-simple-icons-bilibili',
        link: 'https://space.bilibili.com/433525330',
      },
      {
        icon: 'i-simple-icons-qq',
        link: 'https://qm.qq.com/q/uAUJR2FOoK',
      }
    ]
  },
  description: 'Powered by SvelteKit/Urara',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.chickenpige0n.store',
  lang: 'zh-CN',
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  subtitle: 'qwq',
  themeColor: '#6aabe4ff',
  title: 'ChickenPige0n',
}
