'use client'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  HatenaShareButton,
  HatenaIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'

const ShareButton = ({ data }: { data: { title: string; id: string } }) => {
  return (
    <div className='flex flex-row gap-4 mt-4 justify-center'>
      <TwitterShareButton
        url={`https://techamply.com/article/${data.id}`}
        title={data.title}
        className='mr-2'
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton
        url={`https://techamply.com/article/${data.id}`}
        quote={data.title}
        className='mr-2'
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <EmailShareButton
        url={`https://techamply.com/article/${data.id}`}
        subject={data.title}
        className='mr-2'
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <HatenaShareButton url={`https://techamply.com/article/${data.id}`} title={data.title}>
        <HatenaIcon size={32} round={true} />
      </HatenaShareButton>
    </div>
  )
}

export default ShareButton
