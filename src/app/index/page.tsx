import ArticleCard from '@/component/ArticleCard'
import ArticleCardRow from '@/component/ArticleCardRow'

const Page = () => {
  return (
    <main className='container h-full w-full mx-auto my-20 top-16'>
      <div className='flex flex-row justify-center items-center h-full w-full mx-24'>
        <div className='max-w-4xl flex flex-col h-full w-full'>
          <h1 className='text-4xl'>最新の投稿</h1>
          <div className='divider'></div>
          <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
        <div className='container max-w-sm'>
          <h2 className='text-2xl'>Ranking</h2>
          <div className='divider'></div>
          <div className='container'>
            <ArticleCardRow />
            <ArticleCardRow />
            <ArticleCardRow />
            <ArticleCardRow />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
