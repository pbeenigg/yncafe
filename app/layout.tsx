import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yunnan Coffee Brand Archive (Yncafe)',
  description: '云南咖啡品牌档案库（Yncafe）',
  generator: 'PbEeNiG',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          themes={['light', 'dark', 'system', 'geisha', 'typica', 'bourbon']}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
