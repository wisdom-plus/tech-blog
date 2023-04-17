import { getBlogList } from '@/api/microcms'

const routesMap = [
  '',
  '/about',
  '/adminstrator',
  '/article',
  '/web',
  '/infra',
  '/design',
  '/license',
  '/meeting',
  '/private_policy',
]

const sitemap = async () => {
  const res = await getBlogList({ limit: 1000 })

  const posts = () => {
    if (!res)
      return [
        { url: `${process.env.NEXT_PUBLIC_SITE_DOMIN}`, lastModified: new Date().toISOString() },
      ]
    return res.contents.map((post) => {
      return {
        url: `${process.env.NEXT_PUBLIC_SITE_DOMIN}/article/${post.id}`,
        lastModified: post.published_at ? post.published_at : new Date().toISOString(),
      }
    })
  }

  const routes = routesMap.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_DOMIN}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts()]
}

export default sitemap
