import { getBlogList } from '@/api/microcms'

const generateSitemapXml = async () => {
  const topPageFields = [
    {
      path: '',
      lastmod: new Date().toISOString(),
    },
  ]

  const posts = await getBlogList({ limit: 1000 })
  const postFields = () => {
    if (!posts) return [{ path: '/', lastmod: new Date().toISOString() }]
    return posts.contents.map((post) => {
      return {
        path: `/article/${post.id}`,
        lastmod: post.published_at ? post.published_at.toISOString() : new Date().toISOString(),
      }
    })
  }

  const fields = topPageFields.concat(postFields())

  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  fields.forEach((post) => {
    const url = new URL(post.path, `${process.env.NEXT_PUBLIC_SITE_DOMAIN}`)

    xml += `
      <url>
        <loc>${url.toString().replace(/\/$/, '')}</loc>
        <lastmod>${post.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
      </url>
    `
  })

  xml += `</urlset>`

  return xml
}

export default generateSitemapXml
