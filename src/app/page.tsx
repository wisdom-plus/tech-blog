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
            <div className='flex flex-wrap justify-evenly'>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
          <div className='container w-1/4'>
            <h2 className='text-2xl'>カテゴリー</h2>
            <div className='container'>
              <a className='btn btn-primary' href='/blog'>
                ブログへ
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Root
