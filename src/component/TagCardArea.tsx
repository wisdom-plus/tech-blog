import { notFound } from 'next/navigation'
import { use } from 'react'
import { getTagList } from '@/api/microcms'
import Pagination from '@/component/Pagination'
import TagCard from '@/component/TagCard'
import { PER_PAGE } from '@/constants'

const TagCardArea = ({ searchParams }: { searchParams: { page: number } }) => {
  const offset = searchParams.page ? searchParams.page : 1
  const data = use(getTagList({ offset: offset }))

  if (!data) {
    return notFound()
  }

  return (
    <div>
      <div className='max-w-7xl h-full w-full flex flex-wrap justify-evenly'>
        {data.contents.map((item) => {
          return <TagCard key={item.id} tag={item} />
        })}
      </div>
      {data.totalCount > PER_PAGE && <Pagination count={data.totalCount} />}
    </div>
  )
}

export default TagCardArea
