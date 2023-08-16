import { Sumana } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const sumana = Sumana({
	weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sumana',
})

export const metadata = {
  title: {
    template: '%s - DM Brokers',
    default: 'DM Brokers - Expert Business and Private Insurance Solutions.',
  },
  description:
    'Tailored Coverage for Businesses and Individuals - Protecting Your Assets, Mitigating Risks, and Providing Peace of Mind',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', sumana.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
