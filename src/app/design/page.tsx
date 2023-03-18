import ArticleCard from '@/component/ArticleCard'
import BackImage from '@/component/BackImage'

export const metadata = {
  title: 'TechAmply | デザイン',
}

const Page = () => {
  return (
    <>
      <BackImage title='デザイン' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
