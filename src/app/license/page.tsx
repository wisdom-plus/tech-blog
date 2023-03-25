import ArticleCard from '@/component/ArticleCard'
import BackImage from '@/component/BackImage'
import { getBlogList } from '@/api/microcms'

export const metadata = {
  title: 'TechAmply | 資格',
}

const Page = async () => {
  const data = await getBlogList({ category: 'license' })
  return (
    <>
      <BackImage title='資格' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              {data.contents.map((item) => {
                return <ArticleCard key={item.id} article={item} />
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
