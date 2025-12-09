'use client'
import { useState, useEffect } from 'react'

const DarkmodeButton = () => {
  const [theme, setTheme] = useState<string>('light')
  useEffect(() => {
    if (typeof window === 'object') {
      const defult = document.documentElement.dataset.theme
      if (defult) {
        setTheme(() => defult)
      }
    }
  }, [])
  return (
    <>
      <div className='dropdown'>
        <label className='flex' aria-label='Toggle Dark Mode'>
          {theme === 'dark' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              className='fill-gray-300'
              role='img'
              aria-label='ダークモードのアイコン'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
              />
            </svg>
          ) : (
            <svg
              className='cursor-pointer fill-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              role='img'
              aria-label='ライトモードのアイコン'
            >
              <path d='M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z'></path>
            </svg>
          )}
        </label>
        <div className='dropdown-menu mt-2 w-32 rounded-lg border border-border'>
          <button
            type='button'
            onClick={() =>
              setTheme(() => {
                document.documentElement.dataset.theme = 'light'
                return 'light'
              })
            }
          >
            <span className='dropdown-item flex-row gap-2 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                role='img'
                aria-label='ライトモードのアイコン'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                />
              </svg>
              <span>Light</span>
            </span>
          </button>
          <button
            type='button'
            onClick={() =>
              setTheme(() => {
                document.documentElement.dataset.theme = 'dark'
                return 'dark'
              })
            }
          >
            <span className='dropdown-item flex-row gap-2 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
                role='img'
                aria-label='ダークモードのアイコン'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
                />
              </svg>
              <span>Dark</span>
            </span>
          </button>
          <button
            onClick={() => {
              window.matchMedia('(prefers-color-scheme: dark)').matches
                ? setTheme(() => {
                    document.documentElement.dataset.theme = 'dark'
                    return 'dark'
                  })
                : setTheme(() => {
                    document.documentElement.dataset.theme = 'light'
                    return 'light'
                  })
            }}
          >
            <span className='dropdown-item flex-row gap-2 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                role='img'
                aria-label='システムモードのアイコン'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
                />
              </svg>
              <span>System</span>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
export default DarkmodeButton
