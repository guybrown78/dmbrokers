
'use client'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
  {
    name: 'Telephone',
    price: { Monthly: '$0', Annually: '$0' },
		detail: '+(44) 7828 068290',
    description:
      'Our experienced team are ready to assist you with your insurance needs',
  },
  {
    name: 'Email',
    price: { Monthly: '$7', Annually: '$70' },
		detail:"margaret@dmbrokers.co.uk",
    description:
      'We’ll reply as soon as possible, addressing your inquiry',
  },
  {
    name: 'Office',
    price: { Monthly: '$199', Annually: '$1,990' },
		detail:"Winsford, Chesire, CW72FX",
    description:
      'Registered in England we are licensed to trade in United Kingdom and Ireland',
  },
]


function Plan({
  name,
	detail,
  description,
}) {
  return (
    <section
      className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white"
    >
      <h3
        className="flex items-center text-sm font-semibold text-gray-900"
      >
        <Logomark className="h-6 w-6 flex-none" />
        <span className="ml-4">{name}</span>
      </h3>
      <p className="relative mt-5 flex text-xl tracking-tight text-gray-900">
					<span>{detail}</span>
      </p>
      <p className="mt-3 text-sm text-gray-700">
        {description}
      </p>
    </section>
  )
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="Contact DM Brokers"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-normal tracking-tight text-gray-900"
          >
            Reach Out for Expert Insurance Assistance
          </h2>
          <p className="mt-2 text-lg text-gray-600">
						We are here to help you with any questions, inquiries, or insurance requirements you may have. Please feel free to contact us using the information provided below or by filling out the contact form.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div> 
      </Container>
    </section>
  )
}