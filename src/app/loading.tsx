import BackImage from '@/component/BackImage'
import SkeletonCards from '@/component/SkeletonCards'
import { PER_PAGE } from '@/constants'

const Loading = () => {
  return (
    <>
      <BackImage title='最新の投稿' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              {Array.from(Array(PER_PAGE), (i) => {
                return <SkeletonCards key={i} />
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Loading
