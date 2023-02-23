import { client } from 'lib/client'

export const getBlogList = async ({ offset = 0, limit = 10 }) => {
  const res = await client.get({ endpoint: 'blog' })
  return res
}

export const getBlog = async (id: string) => {
  const res = await client.get({ endpoint: 'blog', contentId: id })
  return res
}
