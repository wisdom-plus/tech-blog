import { Suspense } from 'react'
import BackImage from '@/component/BackImage'
import LoadSpinner from '@/component/LoadSpinner'
import TagsCardArea from '@/component/TagCardArea'

export const metadata = {
  title: 'TechAmply | Tags',
}

const Page = async ({ searchParams }: { searchParams: { page: number } }) => {
  return (
    <>
      <BackImage title='Tags' />
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
              <TagsCardArea searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
