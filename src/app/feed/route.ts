import dayjs from 'dayjs'
import { Feed } from 'feed'
import { getBlogList } from '@/api/microcms'

const baseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://techamply.com'
  }
  return 'http://localhost:3000'
}

export const GET = async () => {
  const feed = new Feed({
    title: 'TechAmply',
    description: 'tech blog',
    id: baseUrl(),
    copyright: '© 2023 techamply',
    language: 'ja',
    link: baseUrl(),
    updated: dayjs().toDate(),
    author: {
      name: 'wisdom+',
    },
    feed: baseUrl() + '/feed',
  })

  const blogList = await getBlogList({})
  if (blogList) {
    blogList.contents.forEach((blog) => {
      const url = baseUrl() + '/article/' + blog.id
      feed.addItem({
        title: blog.title,
        id: url,
        link: url,
        content: blog.body,
        date: dayjs(blog.published_at).toDate(),
      })
    })
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
