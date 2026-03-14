import { DOMAIN_URL } from '@/lib/config'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mixlab the pet pharmacy',
  url: `${DOMAIN_URL}`,
  logo: `${DOMAIN_URL}/icon.png`,
  sameAs: ['https://instagram.com/test-mixlab']
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mixlab the pet pharmacy',
  url: `${DOMAIN_URL}`,
  description: 'Mixlab the pet pharmacy platform',
  inLanguage: 'en'
}
