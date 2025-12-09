import dayjs from 'dayjs'
import { categoryMap } from '@/constants'
import type { Category } from '@/types'

const ArticleSummary = ({
  published_at,
  readtime,
  category,
}: {
  published_at: Date
  readtime: number
  category: Category[]
}) => {
  return (
    <div className='flex flex-col w-full mx-auto rounded-xl bg-gray-3 mb-6'>
      <div className='mx-4 pt-3 px-3'>
        <div className='flex justify-between pb-3'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mt-0.5 mr-1'
              role='img'
              aria-label='著者のアイコン'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
            著者
          </div>
          <div className='text-left'>wisdom</div>
        </div>
        <div className='flex justify-between py-3 border-t-2 summary-border'>
          <div className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mt-0 mr-1'
              role='img'
              aria-label='カテゴリーのアイコン'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z'
              />
            </svg>
            カテゴリー
          </div>
          <div className='text-left'>{categoryMap[category[0]]}</div>
        </div>
        <div className='flex justify-between py-3 border-t-2 summary-border'>
          <div className='text-left flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mt-0.5 mr-1'
              role='img'
              aria-label='公開日のアイコン'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
              />
            </svg>
            公開日時
          </div>
          <div className='text-right'>{dayjs(published_at).format('YYYY/MM/DD')}</div>
        </div>
        <div className='flex justify-between py-3 border-t-2 summary-border'>
          <div className='text-left flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 mt-0.5 mr-1'
              role='img'
              aria-label='読書時間のアイコン'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
              />
            </svg>
            読書時間
          </div>
          <div className='text-right'>{readtime}分</div>
        </div>
      </div>
    </div>
  )
}

export default ArticleSummary
