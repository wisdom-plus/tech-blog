import ArticleCard from '@/component/ArticleCard'
import HeaderNav from '@/component/HeaderNav'
import Footer from '@/component/Footer'
import ArticleCardRow from '@/component/ArticleCardRow'

const Root = () => {
  return (
    <div>
      <HeaderNav />
      <main className='container h-screen w-screen mx-auto my-20'>
        <div className='flex justify-center items-center h-full mx-24'>
          <div className='container w-3/4'>
            <h1 className='text-4xl mb-12'>最新の投稿</h1>
            <div className='flex flex-wrap justify-evenly'>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
          <div className='container w-1/4'>
            <h2 className='text-2xl mb-6'>Ranking</h2>
            <div className='container'>
              <ArticleCardRow />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Root
