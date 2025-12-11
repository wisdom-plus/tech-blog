import { load } from 'cheerio'
import hljs, { type HighlightResult } from 'highlight.js'

const MarkdownArea = ({ body }: { body: string }) => {
  const $ = load(body)
  $('div[data-filename]').each((_, elm) => {
    $(elm).prepend(`<span>${$(elm).data('filename')}</span>`)
  })
  $('pre code').each((_, elm) => {
    const language = $(elm).attr('class') || ''
    let result: HighlightResult

    if (language === '') {
      result = hljs.highlightAuto($(elm).text())
    } else {
      result = hljs.highlight($(elm).text(), { language: language.replace('language-', '') })
    }
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  $('a').each((_, elm) => {
    $(elm).addClass('link link-primary link-underline-hover not-prose')
  })
  const markdown = $.html()

  return (
    <div
      className='prose prose-sm sm:prose'
      dangerouslySetInnerHTML={{
        __html: `${markdown}`,
      }}
    />
  )
}

export default MarkdownArea
