'use client'

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
	const handleAnchor = (event, href) => {
		if (href.includes("#")) {
			event.preventDefault();
			window.location.hash = ''
			window.location.hash = href
		}
	}
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-dmDark py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#eeeeee" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-normal tracking-tight text-dmLight sm:text-4xl">
						Are you ready to safeguard&nbsp;your&nbsp;future?
						{/* Ready to Secure Your&nbsp;Future? */}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
						Contact us today for for expert guidance with Personal and Business Insurance Solutions.
          </p>
          <div className="mt-8 space-x-4 flex justify-center">
            {/* <AppStoreLink color="white" /> */}

						<a 
							href="tel:+441606636201" 
							variant="outline" 
							className="hidden lg:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-dmLight hover:text-dmLight-lighter hover:border-gray-400 active:bg-gray-100 active:text-dmLight-lighter"
						>
              Call
            </a> 
            <Button 
							href="#message" 
							variant="outline" 
							color="white"
							onClick={(e) => handleAnchor(e, '#message')}
						>
              Message
            </Button>


          </div>
        </div>
      </Container>
    </section>
  )
}
