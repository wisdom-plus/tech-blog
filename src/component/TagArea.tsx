'use client'
import type { tag } from '../types'

const TagArea = ({ tags }: { tags: tag[] }) => {
  return (
    <div className='badge-area'>
      {tags.map((tag) => (
        <span
          className='badge badge-lg text-sm badge-outline-primary mr-2 px-4 py-1'
          style={{ color: tag.color, borderColor: tag.color }}
          key={tag.id}
        >
          {tag.title}
        </span>
      ))}
    </div>
  )
}

export default TagArea
