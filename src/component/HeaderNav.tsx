import Image from 'next/image'

const HeaderNav = () => {
  return (
    <div className='navbar h-20'>
      <div className='navbar-start'>
        <a href='/' className='navbar-item flex'>
          <Image src='/logo-white.png' width={50} height={50} alt='logo' />
          <div className='text-2xl mt-2 font-merriweather'>TechAmply</div>
        </a>
        <a className='navbar-item' href='/'>
          ブログ
        </a>
      </div>
    </div>
  )
}
export default HeaderNav
