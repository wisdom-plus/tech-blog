import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = () => {
  return (
    <Link href='/' className='card card-image-cover max-w-4sm mb-8'>
      <Image src='/card/1183.jpeg' alt='サムネイル' width='500' height='500' />
      <div className='card-body'>
        <h2 className='card-header'>タイトル</h2>
        <div className='text-right'>2023.03.04</div>
      </div>
    </Link>
  )
}

export default ArticleCard
