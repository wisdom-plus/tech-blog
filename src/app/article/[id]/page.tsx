import dayjs from 'dayjs'
import { load } from 'cheerio'
import hljs from 'highlight.js'
import Breadcrumb from '@/component/Breadcrumb'
import ArticleToc from '@/component/ArticleToc'
import { getBlog } from '@/api/microcms'
import '@/style/typography.scss'
import 'highlight.js/styles/github-dark.css'

export const metadata = {
  title: 'TechAmply | Article',
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getBlog(params.id)
  metadata.title = data.title

  const $ = load(data.body)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  data.body = $.html()

  return (
    <>
      <div className='mt-2 max-w-7xl w-full h-full justify-center items-center mx-auto'>
        <Breadcrumb />
        <h1 className='text-4xl text-center pt-12 px-4'>{data.title}</h1>
      </div>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-around  h-full w-full mx-auto max-w-7xl gap-10'>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-4xl'>
            <div className='card-body'>
              <div className='text-right'>{dayjs(data.published_at).format('YYYY.MM.DD')}</div>
              <div
                className='prose prose-sm sm:prose'
                dangerouslySetInnerHTML={{
                  __html: `${data.body}`,
                }}
              />
            </div>
          </div>
          <div className='flex flex-col w-full mx-auto max-w-sm'>
            <ArticleToc body={data.body} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Page
