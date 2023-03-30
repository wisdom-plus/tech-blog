import { getBlogList } from '@/api/microcms'
import ArticleCard from '@/component/ArticleCard'
import BackImage from '@/component/BackImage'
import Pagination from '@/component/Pagination'
import { PER_PAGE } from '@/consts'

export const metadata = {
  title: 'TechAmply | 勉強会',
}

const Page = async ({
  params,
  searchParams,
}: {
  params: string
  searchParams: { page: number }
}) => {
  const offset = searchParams.page ? searchParams.page : 1
  const data = await getBlogList({ category: 'meeting', offset: offset })
  return (
    <>
      <BackImage title='勉強会' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              {data.contents.map((item) => {
                return <ArticleCard key={item.id} article={item} />
              })}
            </div>
            {data.totalCount > PER_PAGE && <Pagination count={data.totalCount} />}
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
