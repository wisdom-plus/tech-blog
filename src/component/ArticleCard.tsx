import Image from 'next/image'
import Link from 'next/link'
import { article } from '@/types/index'
import dayjs from 'dayjs'

const ArticleCard = ({ article }: { article: article }) => {
  return (
    <Link href={`/article/${article.id}`} className='card card-image-cover max-w-4sm mb-8'>
      <Image src='/card/1183.jpeg' alt='サムネイル' width='500' height='500' />
      <div className='card-body'>
        <h2 className='card-header'>{article.title}</h2>
        <div className='text-right'>{dayjs(article.published_at).format('YYYY.MM.DD')}</div>
      </div>
    </Link>
  )
}

export default ArticleCard
