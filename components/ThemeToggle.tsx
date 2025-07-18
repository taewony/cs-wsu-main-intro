// components/ThemeToggle.tsx
'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-4 py-2 rounded bg-gray-200 theme-dark:bg-gray-700 text-black theme-dark:text-white"
    >
      {dark ? '라이트 모드' : '다크 모드'}
    </button>
  )
}
