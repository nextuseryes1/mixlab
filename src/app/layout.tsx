import { Toaster } from 'sonner'
import './globals.css'
import { organizationJsonLd, websiteJsonLd } from './jsonld'
import { ClientProvider } from './providers/ClientProvider'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export { metadata } from './metadata'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Mixlab" />
      </head>
      <body className={`antialiased`}>
        <ClientProvider>{children}</ClientProvider>

        <Toaster />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd)
          }}
        />
      </body>
    </html>
  )
}
