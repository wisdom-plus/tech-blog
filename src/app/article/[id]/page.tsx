import { notFound } from 'next/navigation'
import { getBlog } from '@/api/microcms'
import ArticleSummary from '@/component/ArticleSummary'
import ArticleToc from '@/component/ArticleToc'
import Breadcrumb from '@/component/Breadcrumb'
import '@/style/typography.scss'
import 'highlight.js/styles/github-dark.css'
import MarkdownArea from '@/component/MarkdownArea'
import ShareButton from '@/component/ShareButton'
import TagArea from '@/component/TagArea'

export const metadata = {
  title: 'TechAmply | Article',
}
export const revalidate = 0

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params
  const data = await getBlog(params.id)

  if (!data) {
    notFound()
  }
  metadata.title = data.title

  return (
    <>
      <div className='mt-2 max-w-7xl w-full h-full justify-center items-center mx-auto'>
        <Breadcrumb title={data.title} />
        <h1 className='text-4xl text-center pt-12 px-4'>{data.title}</h1>
      </div>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-around  h-full w-full mx-auto max-w-7xl gap-10'>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-4xl'>
            <div className='card-body'>
              <TagArea tags={data.tags} />
              <MarkdownArea body={data.body} />
            </div>
          </div>
          <div className='flex flex-col w-full mx-auto max-w-sm'>
            <div className='sticky top-12'>
              <ArticleSummary
                published_at={data.published_at}
                readtime={data.readtime}
                category={data.category}
              />
              <ArticleToc body={data.body} />
              <ShareButton data={data} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
