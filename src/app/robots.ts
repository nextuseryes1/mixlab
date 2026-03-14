import { MetadataRoute } from 'next'
import { DOMAIN_URL } from '@/lib/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api']
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`
  }
}
