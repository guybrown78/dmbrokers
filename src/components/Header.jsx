'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { usePathname, useRouter } from 'next/navigation'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ href, children }, ...props) {
	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = (event) => {
		if(pathname === "/"){
			if (href.includes("#")) {
				window.location.hash = ''
				window.location.hash = href
			}
		}else{
			router.push(`../${href}`)
		}
	}

  return (
    <Popover.Button
			onClick={(e) => handleAnchor(e)}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}
function MobileNavButton({ href, children }, ...props) {
	const router = useRouter();
	const pathname = usePathname();
	const handleAnchor = (event) => {
		if(pathname === "/"){
			if (href.includes("#")) {
				window.location.hash = ''
				window.location.hash = href
			}
		}else{
			router.push(`../${href}`)
		}
	}

  return (
    <Popover.Button
			onClick={(e) => handleAnchor(e)}
      className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-dmDark text-dmLight hover:bg-dmDark-darker active:bg-dmDark-lighter active:dmDark-lighter"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {

	const router = useRouter();
	const pathname = usePathname();
	const handleAnchor = (event, href) => {
		event.preventDefault();
		if(pathname === "/"){
			if (href.includes("#")) {
				// event.preventDefault();
				window.location.hash = ''
				window.location.hash = href
			}
		}else{
			router.push(`../${href}`)
		}
	}
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#services">
                              Services
                            </MobileNavLink>
                            <MobileNavLink href="#about">
                              About
                            </MobileNavLink>
														<MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#contact">Contact</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
													<a 
															href="tel:+441606636201" 
															variant="outline" 
															className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
														>
															Call
														</a> 
                            <MobileNavButton href="#message">
															Message
														</MobileNavButton>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <a 
							href="tel:+441606636201" 
							variant="outline" 
							className="hidden lg:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
						>
              Call
            </a> 
            <Button 
							href="#message" 
							onClick={(e) => handleAnchor(e, '#message')}
							className="hidden lg:block"
						>
              Message
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
