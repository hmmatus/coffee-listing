import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.scss'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffee List',
  description: 'Example project using Next Js 14.2.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
