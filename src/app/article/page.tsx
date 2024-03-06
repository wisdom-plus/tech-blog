import ArticleCardArea from '@/component/ArticleCardArea'
import BackImage from '@/component/BackImage'

export const metadata = {
  title: 'TechAmply | Article',
}

const Root = ({ params, searchParams }: { params: string; searchParams: { page: number } }) => {
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
