'use client'
import { ThemeProvider } from 'next-themes'

const ThemeWrap = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default ThemeWrap
