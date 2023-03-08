import { Merriweather, Merriweather_Sans } from '@next/font/google'
import HeaderNav from '@/component/HeaderNav'
import Footer from '@/component/Footer'
import ThemeWrap from '@/component/ThemeWrap'
import './globals.css'

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
    <html lang='jp' className={`${merriweather.variable} ${merriweather_sans.variable}`}>
      <head />
      <ThemeWrap>
        <body className='leading-normal tracking-normal'>
          <div>
            <HeaderNav />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeWrap>
    </html>
  )
}
export default RootLayout
