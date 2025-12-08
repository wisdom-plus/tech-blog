'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

type Props = {
  title?: string
}

const Breadcrumb = ({ title }: Props) => {
  const pathname = usePathname()
  const [paths, setPaths] = useState<string[]>([])

  useEffect(() => {
    if (pathname) {
      const patharr = pathname.split('/').filter((path) => path !== '')
      if (title) {
        patharr.pop()
        patharr.push(title)
      }
      setPaths(patharr)
    }
  }, [pathname, title])

  return (
    <div className='breadcrumbs text-sm pt-4 pb-12 px-4'>
      <ul>
        <li>
          <Link href='/'>Top</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            {index === paths.length - 1 ? path : <Link href={`/${path}`}>{path}</Link>}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Breadcrumb
