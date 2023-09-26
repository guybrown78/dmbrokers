
'use client'

import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
// import { PhoneFrame } from '@/components/PhoneFrame'
import { HeroFrame } from '@/components/HeroFrame'
// import {
//   DiageoLogo,
//   LaravelLogo,
//   MirageLogo,
//   ReversableLogo,
//   StatamicLogo,
//   StaticKitLogo,
//   TransistorLogo,
//   TupleLogo,
// } from '@/components/StockLogos'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Business Insurance',
    description:
      'As a independent insurance broker, DM Brokers specialises in providing comprehensive business insurance services to protect your company’s assets, operations, and employees',
    icon: BusinessIcon,
    screen: BusinessScreen,
  },
  {
    name: 'Personal Insurance',
    description:
      'We understand that protecting your personal assets and loved ones is a top priority. That’s why we offer a wide range of private insurance services to provide you with comprehensive coverage and peace of mind.',
    icon: IndividualIcon,
    screen: IndividualScreen,
  }
]

function BusinessIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
			<g transform="translate(-10.000000, -1.000000)" fill="#E5BB11">
				<path d="M16,6 L16.0067277,5.88337887 C16.0644928,5.38604019 16.4871642,5 17,5 C17.5522847,5 18,5.44771525 18,6 L18,6 L18,25 C18,25.5522847 17.5522847,26 17,26 C16.4477153,26 16,25.5522847 16,25 L16,25 L16,6 Z" id="Combined-Shape"></path>
				<path d="M23,2 L23.0067277,1.88337887 C23.0644928,1.38604019 23.4871642,1 24,1 C24.5522847,1 25,1.44771525 25,2 L25,2 L25,30 C25,30.5522847 24.5522847,31 24,31 C23.4477153,31 23,30.5522847 23,30 L23,30 L23,2 Z" id="Combined-Shape"></path>
				<path d="M10,10 L10.0067277,9.88337887 C10.0644928,9.38604019 10.4871642,9 11,9 C11.5522847,9 12,9.44771525 12,10 L12,10 L12,20 C12,20.5522847 11.5522847,21 11,21 C10.4477153,21 10,20.5522847 10,20 L10,20 L10,10 Z" id="Combined-Shape"></path>
			</g>
    </svg>
  )
}


function IndividualIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <g transform="translate(-8.000000, -1.000000)" fill="#23A085">
					<path d="M15,6 L15.0067277,5.88337887 C15.0644928,5.38604019 15.4871642,5 16,5 C16.5522847,5 17,5.44771525 17,6 L17,6 L17,25 C17,25.5522847 16.5522847,26 16,26 C15.4477153,26 15,25.5522847 15,25 L15,25 L15,6 Z" id="Combined-Shape" transform="translate(16.000000, 15.500000) scale(-1, 1) translate(-16.000000, -15.500000) "></path>
					<path d="M8,2 L8.00672773,1.88337887 C8.06449284,1.38604019 8.48716416,1 9,1 C9.55228475,1 10,1.44771525 10,2 L10,2 L10,30 C10,30.5522847 9.55228475,31 9,31 C8.44771525,31 8,30.5522847 8,30 L8,30 L8,2 Z" id="Combined-Shape" transform="translate(9.000000, 16.000000) scale(-1, 1) translate(-9.000000, -16.000000) "></path>
        </g>
    </svg>
  )
}
function ItemIcon(props) {
  return (
    <svg viewBox="0 0 16 32" aria-hidden="true" {...props}>
      <g>
					 <path d="M8,2 L8.00672773,1.88337887 C8.06449284,1.38604019 8.48716416,1 9,1 C9.55228475,1 10,1.44771525 10,2 L10,2 L10,30 C10,30.5522847 9.55228475,31 9,31 C8.44771525,31 8,30.5522847 8,30 L8,30 L8,2 Z" id="Combined-Shape" transform="translate(9.000000, 16.000000) scale(-1, 1) translate(-9.000000, -16.000000) "></path> 
        </g>
    </svg>
  )
}



const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function BusinessScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Business Options</AppScreen.Title>
        {/* <AppScreen.Subtitle>
					We can help you safeguard your business against various risks and uncertainties, giving you peace of mind and financial protection
        </AppScreen.Subtitle> */}
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-0">
          <div className="space-6 flex flex-wrap">
            {[
              { label: 'Property Owners', value: 'Property Owners' },
              { label: 'Combined Liability', value: 'Combined Liability' },
							{ label: 'Contractors All Risks & Engineering', value: 'Contractors All Risks & Engineering' },
							{ label: 'Motor Fleet, Transport & Haulage', value: 'Motor Fleet, Transport & Haulage' },
							{ label: 'Shops & Offices', value: 'Shops & Offices' },
							{ label: 'Professional Indemnity', value: 'Professional Indemnity' },
							{ label: 'Package Insurance', value: 'Package Insurance' },
							{ label: 'Management Liability', value: 'Management Liability' },
							{ label: 'Legal Expenses', value: 'Legal Expenses' },
            ].map((field) => (
              <div key={field.label} className="mr-2">
								<div className="mt-2 p-1 bg-dmDark-darker/20 text-md text-dmLight flex items-center rounded-md">
									<span className='mr-1 mt-1'>
										<ItemIcon className="h-3 fill-dmYellow" />
									</span>
                  {field.value}
                </div> 
              </div>
            ))}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function IndividualScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Personal Options</AppScreen.Title>
        {/* <AppScreen.Subtitle>Helping you protect your home, vehicles, valuables, and more against various risks and uncertainties</AppScreen.Subtitle> */}
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
			<div className="px-4 py-0">
          <div className="space-6 flex flex-wrap">
            {[
              { label: 'High Net Worth Home & Motor', value: 'High Net Worth Home & Motor' },
							{ label: 'Home Insurance', value: 'Home Insurance' },
							{ label: 'Holiday Home Insurance', value: 'Holiday Home Insurance' },
							{ label: 'Classic Car', value: 'Classic Car' },
							{ label: 'Private Car', value: 'Private Car' },
							{ label: 'Travel Insurance', value: 'Travel Insurance' },
            ].map((field) => (
              <div key={field.label} className="mr-2">
								<div className="mt-2 p-1 bg-dmDark-darker/20 text-dmLight text-md flex items-center rounded-md ">
									<span className='mr-1 mt-1'>
										<ItemIcon className="h-3 fill-dmGreen" />
									</span>
                  {field.value}
                </div> 
              </div>
            ))}
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}



function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-dmDark-darker/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-dmDark-darker"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left ui-not-focus-visible:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-dmLight">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color={selectedIndex === 0 ? "#E5BB11" : "#23A085"} className="animate-spin-slower" />
        </div>
        <HeroFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] ui-not-focus-visible:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </HeroFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color={featureIndex % 2 === 1 ? '#23A085' : '#E5BB11'}
                  className={featureIndex % 2 === 1 ? 'rotate-90' : 'rotate-45'}
                />
              </div>
              <HeroFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </HeroFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}




export function Services() {
  return (
    <section
      id="services"
      aria-label="Insurance Services"
      className="bg-dmDark py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-normal tracking-tight text-white">
						Comprehensive Insurance Solutions for Businesses and Individuals
          </h2>
          <p className="mt-2 text-lg text-gray-400">
						At DM Brokers, we specialise in providing comprehensive insurance solutions for businesses and individuals. With our expertise in the insurance industry, we offer a wide range of insurance services to meet the needs of our clients.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
