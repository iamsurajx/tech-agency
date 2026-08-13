import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// ============ DATA (self-contained) ============
const siteConfig = {
  name: "WebNirmit",
  title: "WebNirmit | Rapid MVP Development in 14 Days",
  description: "WebNirmit is an AI-native product studio building fixed-price, production-ready MVPs for SaaS founders and D2C brands. Launch your app in 14 days.",
  url: "https://webnirmit.netlify.app/",
  ogImage: "/og.jpg",
  links: {
    twitter: "https://twitter.com/webnirmit",
    github: "https://github.com/webnirmit",
  },
  contact: {
    email: "webnirmit@zohomail.com",
    phone: "+91 62877 13871",
    whatsapp: "916287713871",
    calendly: "https://cal.com/webnirmit/discovery",
  },
}
// ============ DATA END ============

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["MVP development", "SaaS development", "Next.js agency", "AI integration", "startup development India"],
  authors: [{ name: "WebNirmit" }],
  creator: "WebNirmit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@webnirmit",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebNirmit",
              url: siteConfig.url,
              logo: `${siteConfig.url}/logo.png`,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Patna",
                addressRegion: "Bihar",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: siteConfig.contact.phone,
                contactType: "sales",
                email: siteConfig.contact.email,
              },
              sameAs: [siteConfig.links.twitter, siteConfig.links.github],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}