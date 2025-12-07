'use client'
import Link from 'next/link'
import type { Tag } from '../types'

const TagArea = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className='badge-area'>
      {tags.map((tag) => (
        <Link
          href={`/tag/${tag.id}`}
          key={tag.id}
          className='badge badge-lg text-sm badge-outline-primary mr-2 px-4 py-1'
          style={{ color: tag.color, borderColor: tag.color }}
        >
          {tag.title}
        </Link>
      ))}
    </div>
  )
}

export default TagArea
