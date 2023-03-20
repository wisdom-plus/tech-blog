import ArticleCard from '@/component/ArticleCard'
import BackImage from '@/component/BackImage'
import { getBlogList } from '@/api/microcms'

export const metadata = {
  title: 'TechAmply | Article',
}

const Root = async () => {
  const data = await getBlogList({})
  return (
    <>
      <BackImage title='最新の投稿' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              {data.map((item) => {
                return <ArticleCard key={item.id} article={item} />
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Root
