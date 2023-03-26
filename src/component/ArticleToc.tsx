import { load } from 'cheerio'
import Link from 'next/link'

const typography = (tag: string) => {
  if (tag === 'h1') {
    return ''
  } else if (tag === 'h2') {
    return 'pl-4'
  } else if (tag === 'h3') {
    return 'pl-8'
  }
}

const ArticleToc = ({ body }: { body: string }) => {
  const $ = load(body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data) => ({
    text: $(data).text(),
    id: $(data).attr('id'),
    rank: $(data).prop('tagName').toLowerCase(),
  }))

  return (
    <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3'>
      <div className='ml-4 p-3 article-toc'>
        <div className='text-left mb-3 text-xl'>目次</div>
        <div className='flex flex-col'>
          {toc.map((data) => (
            <Link
              href={`#${data.id}`}
              key={data.id}
              className={`text-left mb-2 p-1 hover:bg-gray-5` + ` ${typography(data.rank)}`}
            >
              <div className=''>{data.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleToc
