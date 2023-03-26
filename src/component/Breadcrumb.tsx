'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const [paths, setPaths] = useState<string[]>([])
  useEffect(() => {
    if (pathname) {
      setPaths(() => pathname.split('/').filter((path) => path !== ''))
    }
  }, [pathname])
  return (
    <div className='breadcrumbs text-sm pt-4 pb-12 px-4'>
      <ul>
        <li>
          <Link href='/'>Top</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            <Link href={`/${path}`}>{path}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Breadcrumb
