import { PER_PAGE, OFFSET } from '@/constants/index'
import { article, tag } from '@/types/index'
import { client } from 'lib/client'

type getBlogListProps = {
  offset?: number
  limit?: number
  category?: string
  tagId?: string
}

export const getBlogList = async ({
  offset = 1,
  limit = PER_PAGE,
  category = 'all',
  tagId = '',
}: getBlogListProps) => {
  const today = new Date().toISOString()
  const offset_num = OFFSET(offset)
  const filters = [`published_at[less_than]${today}`]

  if (category !== 'all') {
    filters.push(`category[contains]${category}`)
  }

  if (tagId) {
    filters.push(`tags[contains]${tagId}`)
  }

  const filter = filters.join('[and]')

  try {
    const res = await client.getList<article>({
      endpoint: 'blog',
      queries: {
        offset: offset_num,
        limit: limit,
        filters: filter,
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

export const getTagList = async ({ offset = 1, limit = PER_PAGE }) => {
  const offset_num = OFFSET(offset)

  try {
    const res = await client.getList<tag>({
      endpoint: 'tags',
      queries: { limit: limit, offset: offset_num },
    })
    return { contents: res.contents, totalCount: res.totalCount }
  } catch (error) {
    return false
  }
}
