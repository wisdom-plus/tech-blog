export type article = {
  id: string
  createdAT: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  title: string
  body: string
  category: string[]
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
