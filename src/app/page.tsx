import ArticleCard from '@/component/ArticleCard'
import HeaderNav from '@/component/HeaderNav'
import Footer from '@/component/Footer'

const Root = () => {
  return (
    <div>
      <HeaderNav />
      <main className='container h-screen w-screen mx-auto'>
        <div className='flex justify-center items-center h-full mx-24'>
          <div className='container w-3/4'>
            <h1 className='text-4xl'>Tech-blog</h1>
            <p className='text-xl'>技術ブログです</p>
            <ArticleCard />
          </div>
          <div className='container w-1/4'>
            <a className='btn btn-primary' href='/blog'>
              ブログへ
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Root
