import ArticleCard from '@/component/ArticleCard'
import HeaderNav from '@/component/HeaderNav'

const Root = () => {
  return (
    <div>
      <HeaderNav />
      <main className='container h-screen w-screen mx-32'>
        <div className='flex justify-center items-center h-full mx-32'>
          <div className='container w-3/4'>
            <h1 className='text-4xl'>Tech-blog</h1>
            <p className='text-xl'>技術ブログです</p>
            <ArticleCard />
          </div>
          <div className='container w-1/4'>
            <a className='btn btn-primary' href='/blog'>
              ブログへ
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div className='footer h-20'>
          <div className='footer-start'>
            <a className='footer-item' href='/'>
              プライバシーポリシー
            </a>
            <a className='footer-item' href='/'>
              利用規約
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Root
