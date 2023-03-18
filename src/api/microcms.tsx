import { client } from 'lib/client'

export const getBlogList = async ({ offset = 0, limit = 10, category = 'all' }) => {
  const res = await client.getList({
    endpoint: 'blog',
    queries: {
      offset: offset,
      limit: limit,
      filters: category == 'all' ? '' : `category[contains]${category}`,
    },
  })
  return res.contents
}

export const getBlog = async (id: string) => {
  const res = await client.get({ endpoint: 'blog', contentId: id })
  return res
}
