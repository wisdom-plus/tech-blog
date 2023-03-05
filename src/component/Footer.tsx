const Footer = () => {
  return (
    <footer>
      <div className='bg-gray-50 h-20 mx-20'>
        <div className='navbar container mx-8 px-2'>
          <div className='navbar-start'>
            <a className='navbar-item text-xl font-merriweather' href='/'>
              Tech-blog
            </a>
          </div>
          <div className='navbar-end'>
            <a className='navbar-item' href='/'>
              プライバシーポリシー
            </a>
            <a className='navbar-item' href='/'>
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
