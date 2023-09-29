import { Sumana, Trirong, Noto_Serif } from 'next/font/google'

import clsx from 'clsx'
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import '@/styles/tailwind.css'

const sumana = Sumana({
	weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sumana',
})
const trirong = Trirong({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-trirong',
})
const notoSerif = Noto_Serif({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
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
      className={clsx('h-full scroll-smooth bg-gray-50 antialiased', notoSerif.variable)}
    >
			<GoogleAnalytics GA_MEASUREMENT_ID='G-GHH2B4MSGM' />
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">
					{children}
					<CookieBanner />
				</div>
      </body>
    </html>
  )
}
