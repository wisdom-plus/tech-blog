import HeaderNav from '@/component/HeaderNav'
import Footer from '@/component/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <body className='leading-normal tracking-normal'>
        <div>
          <HeaderNav />
          {children}
          <Footer />
        </div>
      </body>
    </>
  )
}
export default Layout
