import Breadcrumb from '@/component/Breadcrumb'
import { getBlog } from '@/api/microcms'
import dayjs from 'dayjs'

export const metadata = {
  title: 'TechAmply | Article',
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getBlog(params.id)
  metadata.title = data.title

  return (
    <>
      <div className='mt-2 max-w-7xl w-full h-full justify-center items-center mx-auto'>
        <Breadcrumb />
        <h1 className='text-4xl text-center pt-12 px-4'>{data.title}</h1>
      </div>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl gap-10'>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-4xl'>
            <div className='card-body'>
              <div className='text-right'>{dayjs(data.published_at).format('YYYY.MM.DD')}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${data.body}`,
                }}
              />
            </div>
          </div>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-sm'>
            <div>
              <div className='text-left ml-4 text-xl'>目次</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
