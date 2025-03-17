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
      <body>{children}</body>
    </html>
  )
}
