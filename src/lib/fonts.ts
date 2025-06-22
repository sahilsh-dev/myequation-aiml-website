import { Inter, Poppins } from 'next/font/google'

export const primaryFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-primary',
  display: 'swap',
  preload: true,
})

// Used for headings
export const secondaryFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-secondary',
  display: 'swap',
  preload: true,
})