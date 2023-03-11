'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
  const pathname = usePathname()
  const [paths, setPaths] = useState<string[]>([])
  useEffect(() => {
    if (pathname) {
      setPaths(() => pathname.split('/').filter((path) => path !== ''))
    }
  }, [pathname])
  return (
    <div className='breadcrumbs text-sm'>
      <ul>
        <li>Top</li>
        {paths.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  )
}
export default Breadcrumb
