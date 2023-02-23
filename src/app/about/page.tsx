import { client } from 'lib/client'

export default function About() {
  const res = client
    .get({
      endpoint: 'blog',
      contentId: '3fbjjr5d7wq',
    })
    .then((res) => console.log(res))

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
