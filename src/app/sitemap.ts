import { MetadataRoute } from 'next'
import { DOMAIN_URL } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/how-it-works', '/about', '/blog', '/shop']

  return routes.map((route) => ({
    url: `${DOMAIN_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1.0 : 0.7
  }))
}
