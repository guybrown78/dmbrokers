
'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

import { TextField } from '@/components/Fields'

export function Message() {
  let [serviceType, setServiceType] = useState('Business')

  return (
    <section
      id="message"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-white py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-normal tracking-tight text-gray-900"
          >
            Message Us
          </h2>
					<div className="mt-2 space-y-7 text-lg  text-dmDark">
				
						<p>
							At DM Brokers, we value open communication and excellent customer service. We are committed to providing personalised and timely responses to all inquiries, and we look forward to assisting you with your insurance needs.
						</p>
						<p>
							To help us with your inquiry, please select what type of insurance you require.
						</p>
					</div>
          
					
        </div>

			



				<div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">

					<div className="relative mt-4 sm:mt-6">
					</div>
					<div className="-mx-4 mt-4 flex-auto bg-white px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
						

					<form>

					<div className="mt-2 flex justify-center">
						<div className="relative">
							<RadioGroup
								value={serviceType}
								onChange={setServiceType}
								id="service"
								name="service"
								className="grid grid-cols-2"
							>
								{['Business', 'Personal'].map((period) => (
									<RadioGroup.Option
										key={period}
										value={period}
										className={clsx(
											'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
											period === 'Business'
												? 'rounded-l-lg'
												: '-ml-px rounded-r-lg'
										)}
									>
										{period}
									</RadioGroup.Option>
								))}
							</RadioGroup>
							<div
								aria-hidden="true"
								className={clsx(
									'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg  transition-all duration-300',
									serviceType === 'Business'
										? 'bg-dmYellow [clip-path:inset(0_50%_0_0)]'
										: 'bg-dmGreen [clip-path:inset(0_0_0_calc(50%-1px))]'
								)}
							>
								{['Business', 'Personal'].map((period) => (
									<div
										key={period}
										className={clsx(
											'py-2 text-center text-sm font-semibold text-white',
											period === 'Personal' && '-ml-px'
										)}
									>
										{period}
									</div>
								))}
							</div>
						</div>
					</div>

							<TextField
								label="Name"
								id="name"
								name="name"
								type="name"
								autoComplete="name"
								required
							/>
							<TextField
								label="Email address"
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
							/>
							<TextField
								label="Phone"
								id="tel"
								name="tel"
								type="tel"
								autoComplete="tel"
								required
							/>
							<TextField
								aria-hidden={serviceType !== 'Business'}
								tabIndex={serviceType === 'Business' ? "0" : "-1"}
								className={clsx(
									'relative transition-all duration-300',
									serviceType === 'Business'
										? 'pointer-events-auto opacity-100 max-h-full ' //show [clip-path:inset(0_0_0_0)]
										: 'pointer-events-none opacity-0 max-h-0 ' //hide [clip-path:inset(0_0_calc(100%-1px)_0)]
								)}
								label="Company"
								id="company"
								name="company"
								type="text"
							/>
							<TextField
								label="Message"
								id="message"
								name="message"
								type="text"
								required
							/>
							{/* <TextField
								label="Password"
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
							/> */}
		
						<Button type="submit" color="gray" className="mt-8 w-full">
							Send Message
						</Button>
					</form>


					</div>
				</div>


       
			
      </Container>
    </section>
  )
}
