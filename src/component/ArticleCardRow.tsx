import Image from 'next/image'
import Link from 'next/link'

const ArticleCardRow = () => {
  return (
    <Link href='/' className='card mb-4'>
      <div className='card-body flex-row'>
        <Image src='/card/1183.jpeg' alt='サムネイル' width='100' height='100' />
        <div className='flex flex-col'>
          <h3 className='mt-3'>タイトルの文章が入ります</h3>
          <div className='text-right'>2023.03.04</div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCardRow
