import Link from 'next/link'

export const metadata = {
  title: 'TechAmply | 運営者について',
}

const Page = () => {
  return (
    <div className='max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0'>
      <div className='w-full rounded-lg lg:rounded-l-lg shadow-2xl opacity-75 mx-6 lg:mx-0 bg-gray-3'>
        <div className='p-4 md:p-12 lg:text-left text-color'>
          <div className='block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center'></div>

          <h1 className='text-3xl font-bold pt-8 lg:pt-0'>wisdom_plus</h1>
          <div className='mx-auto lg:mx-0 pt-3 border-b-2 border-green-500 opacity-25'></div>
          <p className='pt-4 text-base font-bold flex items-center justify-center lg:justify-start'>
            <svg
              className='h-4 fill-current text-green-700 pr-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              role='img'
              aria-label='ノートパソコンのアイコン'
            >
              <path d='M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z'></path>
            </svg>
            Junior Web Engineer
          </p>
          <p className='pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start'>
            <svg
              className='h-4 fill-current text-green-700 pr-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              role='img'
              aria-label='地球のアイコン'
            >
              <path d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z'></path>
            </svg>
            大阪府枚方市
          </p>
          <h3 className='text-xl font-bold pt-6'>経歴</h3>
          <ol className='steps steps-vertical items-start pt-6'>
            <div className='flex flex-row'>
              <li className='step'>
                <div className='step-circle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    role='img'
                    aria-label='赤ちゃんのアイコン'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                    />
                  </svg>
                </div>
                <p className='text-sm'>1996年 3月</p>
              </li>
              <p className='pt-2 pl-3 text-sm'>大阪に生まれる。数度の転校をし大阪府枚方市に移住</p>
            </div>
            <div className='flex flex-row'>
              <li className='step'>
                <div className='step-circle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    role='img'
                    aria-label='地球のアイコン'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                    />
                  </svg>
                </div>
                <p className='text-sm'>
                  2015年 3月
                  <br />
                  　　~　　
                  <br />
                  2017年
                </p>
              </li>
              <p className='pt-2 pl-3 text-sm'>
                長尾高校を卒業。公務員を目指しフリーターになる
                <br />
                2年試験に落ち公務員になるのを諦める
              </p>
            </div>
            <div className='flex flex-row'>
              <li className='step'>
                <div className='step-circle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    role='img'
                    aria-label='本のアイコン'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                    />
                  </svg>
                </div>
                <p className='text-sm'>2020年 4月</p>
              </li>
              <p className='pt-2 pl-3 text-sm'>
                その後4年ほどフリーターを続け、コロナでのロックダウン時にプログラミングを始める
                <br />
                プログラミングの面白さと奥深さに魅了され、エンジニアを志す
              </p>
            </div>
            <div className='flex flex-row'>
              <li className='step-end flex flex-col items-center gap-2 w-fit'>
                <div className='step-circle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    role='img'
                    aria-label='ノートパソコンのアイコン'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
                    />
                  </svg>
                </div>
                <p className='text-sm'>2023年 1月</p>
              </li>
              <p className='pt-2 pl-3 text-sm'>
                フルリモート受託開発に採用
                <br />
                開発に関わりながら成長中
              </p>
            </div>
          </ol>

          <div className='mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center'>
            <Link
              className='link mr-6'
              href='https://x.com/wisdom_plus_jp'
              data-tippy-content='@twitter_handle'
            >
              <svg
                className='h-6 fill-current text-gray-600 hover:text-green-700'
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-label='Twitterのアイコン'
              >
                <title>Twitter</title>
                <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'></path>
              </svg>
            </Link>
            <Link
              className='link'
              href='https://github.com/wisdom-plus'
              data-tippy-content='@github_handle'
            >
              <svg
                className='h-6 fill-current text-gray-600 hover:text-green-700'
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-label='GitHubのアイコン'
              >
                <title>GitHub</title>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
