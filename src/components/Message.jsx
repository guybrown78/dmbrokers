
'use client'

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

import { TextField, TextAreaField } from '@/components/Fields'
import Link from 'next/link'


const Spinner = () => {
	return(
		<svg viewBox="0 0 16 16">
			<path d="M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z" />
			
		</svg>
	)

}
const ArrowRight = () => {
	return (
		<svg viewBox="0 0 16 16">
			<path d="M9.707 13.707l5-5c0.391-0.39 0.391-1.024 0-1.414l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h9.586l-3.293 3.293c-0.195 0.195-0.293 0.451-0.293 0.707s0.098 0.512 0.293 0.707c0.391 0.391 1.024 0.391 1.414 0z" />
		</svg>
	)
}



const formatDate = async () => {
	let d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

	if (month.length < 2) 
			month = '0' + month;
	if (day.length < 2) 
			day = '0' + day;

	return [year, month, day].join('-');
}

export function Message() {

	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
  const [serviceType, setServiceType] = useState('Business')

	// Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

		setIsSuccess(false)
		setIsError(false)
		setIsLoading(true);

		// var base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PERSONAL_ACCESS_TOKEN}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE);

		const date = await formatDate()

		const fields = {
				Name: event.target.name.value,
				Email: event.target.email.value,
				Phone: event.target.tel.value,
				Service: serviceType,
				Company: event.target.company.value,
				Message: event.target.message.value,
				SentDate: date,
		}
		console.log("fields", fields)
		setTimeout(() => {
			setIsLoading(false);
			setIsSuccess(true)
		}, 750)
		// base('WebsiteContactForm').create([
		// 	{
		// 		"fields": {
		// 				Name: event.target.name.value,
		// 				Email: event.target.email.value,
		// 				Phone: event.target.phone.value,
		// 				Service: serviceType,
		//				Company: event.target.company.value
		// 				Message: event.target.message.value,
		// 				SentDate: date,
		// 		}
		// 	},

		// ], function(err, records) {
		// 	if (err) {
		// 		console.error(err);
		// 		setIsError(true)
		// 		// setIsLoading(false);

		// 		return;
		// 	}
		// 	records.forEach(function (record) {
		// 		console.log(record.getId());
		// 		setIsSuccess(true);
		// 		setIsLoading(false);
		// 	});
		// });
		
  }

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
							At DM Brokers, we value open communication and excellent customer service. We are committed to providing personalised and timely responses to all inquiries, and we look forward to assisting you  <span className="whitespace-nowrap">with your insurance needs.</span>
						</p>
						<p>
							To help us with your inquiry, please select what type <span className="whitespace-nowrap">of insurance you require.</span>
						</p>
					</div>
          
					
        </div>

			



				<div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">

					<div className="relative mt-4 sm:mt-6">
					</div>
					<div className="-mx-4 mt-4 flex-auto bg-white px-4 py-6 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24">
						

					<form	onSubmit={(e) => handleSubmit(e)}>

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
							<TextAreaField
								label="Message"
								id="message"
								name="message"
								rows={3}
								required
							/>
		
						<Button type="submit" color="gray" className="mt-8 w-full">
							{
								!isLoading && (
									<span className='flex items-center'>
										Send Message <span aria-hidden="true" className="ml-2 w-5 h-5 fill-dmLight"><ArrowRight /></span>
									</span>
								)
							}
							{
								isLoading && (
									<span className='flex items-center'>
										Sending <span aria-hidden="true" className="ml-2 w-5 h-5 animate-spin fill-dmLight"><Spinner /></span>
									</span>
								)
							}
							
						</Button>
						{ isSuccess && (
							<div className="w-full bg-green-50 mt-3 p-4 rounded-md">
								<p className='font-light text-sm text-dmDark'>
									<span className='font-semibold'>Thank you.</span> Your message has been received, and you will be contacted shortly.
								</p>
							</div>
						)}
						{ isError && (
							<div className="w-full bg-red-50 mt-3 p-4 rounded-md">
								<p className='font-light text-sm text-dmDark'>
									<span className='font-semibold'>Oh dear.</span> There has been a problem while sending your message. This will be resolved as soon as possible. 
								</p>
								<p className='font-light text-sm text-dmDark mt-2'>
									In the meantime, please send any messages direct to <a href="mailto:dm@dmbrokers.co.uk" target="_blank" className='font-medium underline cursor-pointer'>dm@dmbrokers.co.uk</a>
								</p>
							</div>
						)}
				
					</form>

					<ul className='w-full text-xs flex space-x-5 mt-4 justify-center items-center'>
						<li><Link href="../info/privacy"className='underline'>Privacy Policy</Link></li>
						<li><Link href="../info/terms"className='underline'>Terms and Conditions</Link></li>
					</ul>

					</div>
				</div>


       
			
      </Container>
    </section>
  )
}
