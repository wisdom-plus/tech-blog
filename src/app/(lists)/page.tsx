import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { getBlogList } from '@/api/microcms'
import ArticleCardArea from '@/component/ArticleCardArea'
import BackImage from '@/component/BackImage'
import SkeletonCards from '@/component/SkeletonCards'

const Root = async ({
  params,
  searchParams,
}: {
  params: string
  searchParams: { page: number }
}) => {
  const offset = searchParams.page ? searchParams.page : 1
  const data = await getBlogList({ offset: offset })
  if (!data) {
    return notFound()
  }
  return (
    <>
      <BackImage title='最新の投稿' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <ArticleCardArea category={'all'} searchParams={searchParams} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Root
