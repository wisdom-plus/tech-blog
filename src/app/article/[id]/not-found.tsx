import Link from 'next/link'

const PageNotFound = () => {
  return (
    <>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-around  h-full w-full mx-auto max-w-7xl gap-10'>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-7xl'>
            <div className='card-body'>
              <p className='text-center text-4xl'>Page Not Found</p>
              <p className='text-center text-xl mt-12'>お探しのページは見つかりませんでした</p>
              <p className='text-center text-xl'>
                お探しのページは削除されたか、URLが変更された可能性があります。
              </p>
              <p className='text-center text-xl'>
                お手数ですが、URLをご確認の上、再度お試しください。
              </p>
              <p className='text-center text-xl mt-12'>
                <Link href='/' className='link text-xl'>
                  トップページへ戻る
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PageNotFound
