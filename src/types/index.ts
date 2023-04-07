export type article = {
  id: string
  createdAT: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  title: string
  body: string
  category: Category[]
  tags: string[]
  thumbnail: thumbnail
  published_at: Date
  readtime: number
}

export type thumbnail = {
  url: string
  height: number
  width: number
}

export type Category = 'all' | 'web' | 'design' | 'infra' | 'meeting' | 'license' | 'life' | 'other'
