import BackImage from '@/component/BackImage'
import SkeletonCards from '@/component/SkeletonCards'
import { PER_PAGE } from '@/constants'

const Loading = () => {
  return (
    <>
      <BackImage title='ローディング中' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              {Array.from(Array(PER_PAGE), (_, index) => {
                return <SkeletonCards key={index} />
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Loading
