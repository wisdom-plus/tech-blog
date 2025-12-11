'use client'
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, c - c / 6)
  }
}
const TopButton = () => {
  return (
    <div className='fixed bottom-0 right-0 p-6'>
      <button
        type='button'
        className='inline-flex p-3 w-12 h-12 rounded-full bg-gray-3 items-center justify-center'
        onClick={() => scrollToTop()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 fill-slate-7'
          role='img'
          aria-label='戻るボタンのアイコン'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18'
          />
        </svg>
      </button>
    </div>
  )
}

export default TopButton
