const Loading = () => {
  return (
    <>
      <div className='mt-2 max-w-7xl w-full h-full justify-center items-center mx-auto'>
        <div className='breadcrumbs text-sm pt-4 pb-12 px-4'>
          <ul>
            <li>
              <span>Top</span>
            </li>
            <li>
              <span>article</span>
            </li>
          </ul>
        </div>
        <h1 className='text-4xl text-center pt-12 px-4'>ローディング中</h1>
      </div>
      <main className='h-full w-full mx-auto my-20 top-16'>
        <div className='flex flex-row justify-around  h-full w-full mx-auto max-w-7xl gap-10'>
          <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 max-w-4xl'>
            <div className='card-body skeleton h-screen' />
          </div>
          <div className='flex flex-col w-full mx-auto max-w-sm'>
            <div className='sticky top-12'>
              <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 mb-6 skeleton h-64' />
              <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 skeleton h-64' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Loading
