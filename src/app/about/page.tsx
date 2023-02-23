import { getBlogList } from '@/api/microcms'
const About = async () => {
  const res = await getBlogList({ offset: 0 })
  console.log(res)

  return (
    <main>
      <div className='navbar'>
        <div className='navbar-start'>
          <a href='/' className='navbar-item'>
            Title
          </a>
          <button className='btn btn-primary'>Default</button>
        </div>
      </div>
      <div>
        <h1 className='text-red-500'>About</h1>
      </div>
    </main>
  )
}

export default About
