import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BachaPortFolio',
  description: 'Created with Next.js by bechbech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Set the Luffy Nika favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/luffy-nika.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/luffy-nika.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}