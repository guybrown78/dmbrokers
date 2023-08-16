'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Amazing service.',
    body: 'Super fast, efficient and taylored business insurance.',
    author: 'Digitalopolis',
    rating: 5,
  },
  {
    title: 'You need DM Brokers.',
    body: 'I didn’t understand the insurance market at all before we approached DM Brokers. I still don’t, but at least I’m insured now.',
    author: 'BusinessOwner',
    rating: 5,
  },
  {
    title: 'They are so efficient.',
    body: 'PWith DM Brokers, they make it so easy to understand the insurance market that I can’t believe they’re actually legit.',
    author: 'LivingDaDream',
    rating: 5,
  },
  {
    title: 'Screw other brokers.',
    body: 'I barely made any progress with other insurance brokers, now i am fully insured.',
    author: 'PJKribs78',
    rating: 5,
  },
  {
    title: 'I love them',
    body: 'I started providing insurance information myself and now I get new insurance tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!',
    author: 'John Hall',
    rating: 5,
  },
  {
    title: 'Too good to be true.',
    body: 'I was stuck with business insurance, going round and round in circles till I came across these guys!',
    author: 'Juninho25',
    rating: 5,
  },
  {
    title: 'Wish I could give 6 stars',
    body: 'This is literally the most important job I had to do for my company and I was beyond stress. DM Brokers guided me through every aspect and now I just sit o Facebook all day',
    author: 'SarahXxXx',
    rating: 5,
  },
  {
    title: 'Bought a few classic cars!',
    body: 'Yeah, you read that right. Want your own classic cars too?, then you will need insurance. these people can help',
    author: 'HughThew',
    rating: 5,
  },
  {
    title: 'No more stress!',
    body: 'After 2 weeks of searching for insurance I was going round in circles. Which is apt because the circles on this site are sexy as!',
    author: 'BruceWayne',
    rating: 5,
  },
  {
    title: 'Wow!',
    body: 'Such an amazing and honest service',
    author: 'RichiePaul',
    rating: 5,
  },
  {
    title: 'No more insurance blues.',
    body: 'Mags is so down to earth, thorough and explains everything. I feel like an insurance expert now',
    author: 'TheCountOfMonteChristo',
    rating: 5,
  },
  {
    title: 'It’s like a superpower.',
    body: 'Everytime I need insurance I reach out to DM Brokers and its sorted',
    author: 'ClarkKent',
    rating: 5,
  },
  {
    title: 'Only work 2 months per year.',
    body: 'I approached DM Brokers beacuse we needed holiday home insurance. I can’t believe no one else can organise it the way DM do',
    author: 'GarethSouthgate6',
    rating: 5,
  },
  {
    title: 'Only use DM Brokers',
    body: 'If you want to have the best insurance ever!',
    author: 'JimBob',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {/* {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300'
          )}
        />
      ))} */}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-normal tracking-tight text-gray-900 sm:text-center"
        >
          Hear What Our Satisfied Clients Have to Say.
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
				We take pride in our long-standing relationships with our clients and their satisfaction with our insurance services. Don't just take our word for it - see for yourself what our valued customers have to say about their experience working with us.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
