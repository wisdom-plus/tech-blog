import { ImageResponse } from 'next/server'

export const size = { width: 1200, height: 600 }
export const alt = 'About Acme'
export const contentType = 'image/png'

const srcUrl = (url: string) => {
  if (process.env.VERCEL_ENV === 'production') {
    return `https://techamply.com/${url}`
  } else {
    return `http://localhost:3000/${url}`
  }
}

const og = () => {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e8e8e8',
          fontSize: 64,
          fontWeight: 600,
        }}
      >
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img src={srcUrl('logo.png')} height={400} width={400} alt='logo' />
        Tech Amply
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

export default og
