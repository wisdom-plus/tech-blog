import { Suspense } from 'react'
import ArticleCardArea from '@/component/ArticleCardArea'
import BackImage from '@/component/BackImage'
import LoadSpinner from '@/component/LoadSpinner'

export const metadata = {
  title: 'TechAmply | Web',
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { page: number }
}) => {
  return (
    <>
      <BackImage title='Web' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <Suspense
              fallback={
                <div className='max-w-7xl h-full w-full flex justify-evenly'>
                  <LoadSpinner />
                </div>
              }
            >
              <ArticleCardArea tagId={params.id} searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
