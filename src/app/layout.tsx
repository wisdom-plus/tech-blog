import { Merriweather, Merriweather_Sans } from '@next/font/google'
import Analytics from '@/component/Analytics'
import Footer from '@/component/Footer'
import HeaderNav from '@/component/HeaderNav'
import TopButton from '@/component/TopButton'
import '@/style/globals.css'

export const metadata = {
  title: 'TechAmply',
  description:
    "TechAmply is a blog about software development, programming, and technology. It's written by a software engineer who loves to learn and share his knowledge.",
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
    <html
      lang='jp'
      className={`${merriweather.variable} ${merriweather_sans.variable}`}
      data-theme='dark'
    >
      <head>
        <Analytics />
      </head>
      <body className='leading-normal tracking-normal'>
        <div className='h-full w-full'>
          <HeaderNav />
          {children}
          <TopButton />
          <Footer />
        </div>
      </body>
    </html>
  )
}
export default RootLayout
