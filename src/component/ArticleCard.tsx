import Image from 'next/image'

const ArticleCard = () => {
  return (
    <div className='card card-image-cover w-1/3 m-4'>
      <Image src='/card/1183.jpeg' alt='サムネイル' width='500' height='500' />
      <div className='card-body'>
        <h2 className='card-header'>タイトル</h2>
        <div className='text-right'>2023.03.04</div>
      </div>
    </div>
  )
}

export default ArticleCard
