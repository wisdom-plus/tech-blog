import { PER_PAGE, OFFSET } from '@/constants/index'
import type { Article, Tag } from '@/types/index'
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
    const res = await client.getList<Article>({
      endpoint: 'blog',
      queries: {
        offset: offset_num,
        limit: limit,
        filters: filter,
      },
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    })
    return { contents: res.contents, totalCount: res.totalCount }
  } catch (_error) {
    return false
  }
}

export const getBlog = async (id: string) => {
  try {
    const res = await client.get<Article>({
      endpoint: 'blog',
      contentId: id,
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    })
    return res
  } catch (_error) {
    return false
  }
}

export const getTagList = async ({ offset = 1, limit = PER_PAGE }) => {
  const offset_num = OFFSET(offset)

  try {
    const res = await client.getList<Tag>({
      endpoint: 'tags',
      queries: { limit: limit, offset: offset_num },
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
    })
    return { contents: res.contents, totalCount: res.totalCount }
  } catch (_error) {
    return false
  }
}
