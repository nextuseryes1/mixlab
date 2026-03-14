import { Metadata } from 'next'
import { DOMAIN_URL } from '@/lib/config'

export const metadata: Metadata = {
  metadataBase: new URL(`${DOMAIN_URL}`),
  title: {
    default: 'Mixlab the pet pharmacy',
    template: '%s | Mixlab'
  },
  description: 'Mixlab the pet pharmacy'
}
