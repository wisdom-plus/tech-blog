import { client } from 'lib/client'

export const getBlogList = async ({ offset = 0, limit = 10, category = 'all' }) => {
  const today = new Date().toISOString()
  const fileter =
    category == 'all'
      ? `published_at[less_than]${today}`
      : `category[contains]${category}[and]published_at[less_than]${today}]`
  const res = await client.getList({
    endpoint: 'blog',
    queries: {
      offset: offset,
      limit: limit,
      filters: fileter,
    },
  })
  return res.contents
}

export const getBlog = async (id: string) => {
  const res = await client.get({ endpoint: 'blog', contentId: id })
  return res
}
