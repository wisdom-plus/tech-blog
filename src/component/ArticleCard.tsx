import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { article } from '@/types/index'
import type { thumbnail } from '@/types/index'

const setUrl = (thumbnail: thumbnail, category: string[]) => {
  if (thumbnail != undefined) {
    return thumbnail.url ? thumbnail.url : defaultImageUrl(category[0])
  } else {
    return defaultImageUrl(category[0])
  }
}

const defaultImageUrl = (category: string) => {
  switch (category) {
    case 'web':
      return '/card/1183.jpeg'
    case 'design':
      return '/card/1213.jpeg'
    case 'infra':
      return '/card/1037.jpeg'
    case 'license':
      return '/card/539.jpeg'
    case 'meeting':
      return '/card/696.jpeg'
    default:
      return '/card/985.jpeg'
  }
}

const ArticleCard = ({ article }: { article: article }) => {
  console.log(article.thumbnail)
  return (
    <Link href={`/article/${article.id}`} className='card card-image-cover max-w-4sm mb-8'>
      <Image
        src={setUrl(article.thumbnail, article.category)}
        alt='サムネイル'
        width='500'
        height='500'
        className='aspect-square object-contain'
      />
      <div className='card-body'>
        <h2 className='card-header'>{article.title}</h2>
        <div className='text-right'>{dayjs(article.published_at).format('YYYY.MM.DD')}</div>
      </div>
    </Link>
  )
}

export default ArticleCard
