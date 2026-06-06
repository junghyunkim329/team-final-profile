import type React from 'react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// Configure fonts with proper options
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir',
  ),
  title: {
    default: 'MYWORLD',
    template: '%s | MYWORLD',
  },
  description:
    'A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by shshjang14.',
  keywords: [
    'Software Engineering',
    'Web Development',
    'Next.js',
    'React',
    'TypeScript',
    'AI',
    'Machine Learning',
    'Systems Programming',
    'Code Experiments',
  ],
  authors: [{ name: 'shshjang14', url: 'https://github.com/junghyunkim329' }],
  creator: 'shshjang14',
  publisher: 'shshjang14',
  // generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    title: 'MYWORLD',
    description:
      'A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by shshjang14.',
    siteName: 'MYWORLD',
    images: [
      {
        url: '/MYWORLD-icon.png',
        width: 1200,
        height: 630,
        alt: "MYWORLD — shshjang14's Digital Laboratory",
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "MYWORLD — shshjang14's Digital Laboratory",
  //   description:
  //     'A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts.',
  //   creator: '@ehsanghaffar',
  //   images: ['/og-image.png'],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/MYWORLD-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/MYWORLD-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/MYWORLD-icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/MYWORLD-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="theme-mode"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
