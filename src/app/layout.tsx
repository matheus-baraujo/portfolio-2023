import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css';

import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matheus Batista - Web Dev',
  description: 'Web developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
