'use client'
import { useRouter, usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { GA_ID, pageview } from 'lib/gtag'

const Analytics = () => {
  const pathname = usePathname() // Get current route

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname)

  useEffect(() => {
    if (!GA_ID) {
      return
    }

    const handleRouteChange = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageview(url)
      }
    }

    if (savedPathNameRef.current !== pathname) {
      handleRouteChange(pathname, { shallow: false })
    }
  }, [pathname])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}

export default Analytics
