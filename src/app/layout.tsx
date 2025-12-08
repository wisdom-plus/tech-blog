import { SpeedInsights } from '@vercel/speed-insights/next'
import { Merriweather, Merriweather_Sans } from 'next/font/google'
import Analytics from '@/component/Analytics'
import Footer from '@/component/Footer'
import HeaderNav from '@/component/HeaderNav'
import TopButton from '@/component/TopButton'
import '@/style/globals.css'

export const metadata = {
  metadataBase: new URL('https://techamply.com'),
  title: {
    default: 'TechAmply',
    template: `%s - ${'TechAmply'}`,
  },
  description:
    "TechAmply is a blog about software development, programming, and technology. It's written by a software engineer who loves to learn and share his knowledge.",
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://techamply.com',
    siteName: 'TechAmply',
    title: 'TechAmply',
    description:
      "TechAmply is a blog about software development, programming, and technology. It's written by a software engineer who loves to learn and share his knowledge.",
  },
}

const merriweather = Merriweather({
  variable: '--font-merriweather',
  display: 'swap',
  weight: '300',
  subsets: ['latin'],
})

const merriweather_sans = Merriweather_Sans({
  variable: '--font-merriweather-sans',
  display: 'swap',
  weight: '300',
  subsets: ['latin'],
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${merriweather.variable} ${merriweather_sans.variable}`} data-theme='dark'>
      <head>
        <Analytics />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8331961064970162'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body className='leading-normal tracking-normal'>
        <div className='h-full w-full'>
          <HeaderNav />
          {children}
          <TopButton />
          <Footer />
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
export default RootLayout
