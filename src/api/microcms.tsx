import { PER_PAGE, OFFSET } from '@/consts/index'
import { article } from '@/types/index'
import { client } from 'lib/client'

export const getBlogList = async ({ offset = 1, limit = PER_PAGE, category = 'all' }) => {
  const today = new Date().toISOString()
  const offset_num = OFFSET(offset)
  const fileter =
    category == 'all'
      ? `published_at[less_than]${today}`
      : `category[contains]${category}[and]published_at[less_than]${today}]`
  try {
    const res = await client.getList<article>({
      endpoint: 'blog',
      queries: {
        offset: offset_num,
        limit: limit,
        filters: fileter,
      },
    })
    return { contents: res.contents, totalCount: res.totalCount }
  } catch (error) {
    return false
  }
}

export const getBlog = async (id: string) => {
  try {
    const res = await client.get<article>({ endpoint: 'blog', contentId: id })
    return res
  } catch (error) {
    return false
  }
}
