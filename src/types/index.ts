export type article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  category: Category[]
  tags: tag[]
  thumbnail: thumbnail
  published_at: Date
  readtime: number
}

export type thumbnail = {
  url: string
  height: number
  width: number
}

export type tag = {
  id: string
  title: string
  color: string
}

export type Category = 'all' | 'web' | 'design' | 'infra' | 'meeting' | 'license' | 'life' | 'other'
