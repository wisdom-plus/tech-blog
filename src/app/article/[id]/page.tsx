import Breadcrumb from '@/component/Breadcrumb'
import { getBlog } from '@/api/microcms'

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getBlog(params.id)
  const metadata = {
    title: data.title,
  }
  return (
    <>
      <div className='mt-2 max-w-7xl w-full h-full justify-center items-center mx-auto'>
        <Breadcrumb />
        <h1 className='text-4xl text-center pt-12 px-4'>{data.title}</h1>
      </div>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-center items-center h-full w-full mx-auto max-w-7xl'></div>
      </main>
    </>
  )
}

export default Page
