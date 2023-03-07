import Image from 'next/image'
import Link from 'next/link'

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
          <Link href='/' className='navbar-item text-whiteInverted ml-3 text-lg'>
            Web
          </Link>
          <Link href='/' className='navbar-item text-whiteInverted ml-3 text-lg'>
            インフラ
          </Link>
          <Link href='/' className='navbar-item text-whiteInverted ml-3 text-lg'>
            UI/UX
          </Link>
        </div>
        <div className='navbar-end gap-6 md:gap-3 mr-12 mt-2'>
          <Link href='/' className='navbar-item'>
            <svg
              className='fill-slate-700'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z' />
            </svg>
          </Link>
          <Link href='/' className='navbar-item'>
            <svg
              className='fill-slate-700'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z' />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default HeaderNav
