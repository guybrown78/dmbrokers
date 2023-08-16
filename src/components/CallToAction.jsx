import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
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
						Ready to Secure Your&nbsp;Future?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
						Contact us today for for expert guidance with Personal and Business Insurance Solutions.
          </p>
          <div className="mt-8 space-x-4 flex justify-center">
            {/* <AppStoreLink color="white" /> */}

						<Button href="#" variant="outline" color="white">
              Call
            </Button> 
            <Button href="/#message" variant="outline" color="white">
              Message
            </Button>


          </div>
        </div>
      </Container>
    </section>
  )
}
