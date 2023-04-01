import BackImage from '@/component/BackImage'
import LoadSpinner from '@/component/LoadSpinner'

const Loading = () => {
  return (
    <>
      <BackImage title='勉強会' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly space-x-3'>
              <LoadSpinner />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Loading
