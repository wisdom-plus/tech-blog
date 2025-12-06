export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  category: Category[]
  tags: Tag[]
  thumbnail: Thumbnail
  published_at: Date
  readtime: number
}

export type Thumbnail = {
  url: string
  height: number
  width: number
}

export type Tag = {
  id: string
  title: string
  color: string
}

export type Category = 'all' | 'web' | 'design' | 'infra' | 'meeting' | 'license' | 'life' | 'other'
