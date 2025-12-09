'use client'
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { PER_PAGE } from '@/constants'

const Pagination = ({ count }: { count: number }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const page = () => {
    if (searchParams.has('page')) {
      return searchParams.get('page')
    } else {
      return 1
    }
  }
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  const range_count = Math.ceil(count / PER_PAGE)

  const paginationURL = (page: number) => {
    return `${pathname}?page=${page}`
  }

  return (
    <div className='pagination flex justify-center mt-4'>
      {range(1, range_count).map((item, index) => (
        <Link href={paginationURL(item)} key={index}>
          <div className={page() === item ? 'btn btn-active' : 'btn'}>{item}</div>
        </Link>
      ))}
    </div>
  )
}

export default Pagination
