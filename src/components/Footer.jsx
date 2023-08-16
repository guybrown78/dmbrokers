// import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import { TextField } from '@/components/Fields'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
// import qrCode from '@/images/qr-code.svg'

// function QrCodeBorder(props) {
//   return (
//     <svg width="40" height="40" viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
//       <path
//         d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
//         strokeWidth="1"
//         strokeLinecap="round"
//       />
//     </svg>
//   )
// }

function CallOut(props){
	return (
		<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" aria-hidden="true" {...props}>
			<path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z"></path>
		</svg>
	)
}
export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">DM Brokers</p>
                <p className="mt-1 text-sm">Expert Business and Personal Insurance Solutions.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-12 w-12 flex-none items-center justify-center">
              <CallOut className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-dmGreen" />
              {/* <Image src={qrCode} alt="" unoptimized /> */}
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Call
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
								+44 7828 068290
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          {/* <form className="flex w-full justify-center md:w-auto"> */}
            {/* <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink"
            /> */}
            <Button href="/#message" type="submit" color="gray" className="ml-4 flex-none">
              <span className="hidden lg:inline">Message us</span>
              <span className="lg:hidden">Message</span>
            </Button>
          {/* </form> */}
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
