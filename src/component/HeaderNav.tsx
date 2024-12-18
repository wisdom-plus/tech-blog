import Image from 'next/image'
import Link from 'next/link'
import DarkmodeButton from '@/component/DarkmodeButton'

const HeaderNav = () => {
  return (
    <nav className='navbar py-3 shadow-none bg-backgroundPrimary/70'>
      <div className='flex mx-auto w-full max-w-7xl'>
        <div className='navbar-start'>
          <Link href='/' className='navbar-item flex'>
            <Image src='/logo-white.png' width={40} height={40} alt='logo' />
            <div className='text-3xl mt-2 font-merriweather'>TechAmply</div>
          </Link>
        </div>
        <div className='navbar-center gap-1 lg:flex mt-2'>
          <Link href='/web' className='navbar-item text-whiteInverted ml-3 text-lg'>
            Web
          </Link>
          <Link href='/infra' className='navbar-item text-whiteInverted ml-3 text-lg'>
            インフラ
          </Link>
          <Link href='/design' className='navbar-item text-whiteInverted ml-3 text-lg'>
            デザイン
          </Link>
        </div>
        <div className='navbar-end gap-6 md:gap-3 mr-12 mt-2'>
          <Link href='https://github.com/wisdom-plus' className=''>
            <svg
              className='fill-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z' />
            </svg>
          </Link>
          <Link href='https://x.com/wisdom_plus_jp' className=''>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              className='fill-gray-300'
            >
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
            </svg>
          </Link>
          <DarkmodeButton />
        </div>
      </div>
    </nav>
  )
}
export default HeaderNav
