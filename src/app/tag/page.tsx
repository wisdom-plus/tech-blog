import BackImage from '@/component/BackImage'
import TagsCardArea from '@/component/TagCardArea'

export const metadata = {
  title: 'TechAmply | Tags',
}

const Page = async (props: { searchParams: Promise<{ page: number }> }) => {
  const searchParams = await props.searchParams
  return (
    <>
      <BackImage title='Tags' />
      <main className='container h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'>
          <div className='flex flex-col h-full w-full'>
            <TagsCardArea searchParams={searchParams} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
