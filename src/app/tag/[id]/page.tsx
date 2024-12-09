import ArticleCardArea from '@/component/ArticleCardArea'
import BackImage from '@/component/BackImage'

export const metadata = {
  title: 'TechAmply | Tag',
}

const Page = async (props: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page: number }>
}) => {
  const searchParams = await props.searchParams
  const params = await props.params
  return (
    <>
      <BackImage title='Tags' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <ArticleCardArea tagId={params.id} searchParams={searchParams} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
