import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-3'>
      <div className='mx-auto px-6 py-24 grid grid-cols-1 max-w-7xl gap-8 lg:grid-cols-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center'>
            <h1 className='text-2xl font-merriweather'>TechAmply</h1>
          </div>
          <p className='text-sm text-content3'>
            エンジニアがスキルアップをするため、バックエンド、フロントエンド、インフラなど興味のあることを実践し、記事にしていくブログです
          </p>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold uppercase'>カテゴリー</h2>
          <ul className='flex flex-col gap-4 text-content2'>
            <li>
              <Link href='/web'>Web</Link>
            </li>
            <li>
              <Link href='/infra'>インフラ</Link>
            </li>
            <li>
              <Link href='/design'>デザイン</Link>
            </li>
            <li>
              <Link href='/meeting'>勉強会</Link>
            </li>
            <li>
              <Link href='/license'>資格勉強</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold uppercase'>MENU</h2>
          <ul className='flex flex-col gap-4 text-content2'>
            <li>
              <Link href='/'>ホーム</Link>
            </li>
            <li>
              <Link href='/about'>このサイトについて</Link>
            </li>
            <li>
              <Link href='/administrator'>運営者について</Link>
            </li>
            <li>
              <Link href='/private_policy'>プライベートポリシー</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-sm font-semibold uppercase'>Links</h2>
          <ul className='flex flex-row gap-4 text-content2'>
            <li>
              <Link href='https://github.com/wisdom-plus'>
                <svg
                  className='fill-gray-300'
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                  role='img'
                  aria-label='GitHubのアイコン'
                >
                  <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z' />
                </svg>
              </Link>
            </li>
            <li>
              <Link href='https://x.com/wisdom_plus_jp'>
                <svg
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  className='fill-gray-300'
                  role='img'
                  aria-label='X（旧Twitter）のアイコン'
                >
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>
              </Link>
            </li>
            <li>
              <Link href='/feed'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='32'
                  height='32'
                  strokeWidth={1.5}
                  className='fill-gray-300'
                  role='img'
                  aria-label='RSSフィードのアイコン'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
