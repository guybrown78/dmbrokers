import Image from 'next/image'
import { useId } from 'react'

import { Container } from '@/components/Container'

import aboutImage from '@/images/about.jpeg'





export function About() {
  return (
    <section
      id="about"
      aria-label="About DM Brokers"
      className="py-20 sm:py-32"
    >
      <Container>
				<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
					<div className="lg:pl-20">
						<div className="max-w-xs px-2.5 lg:max-w-none">
							<Image
								src={aboutImage}
								alt=""
								sizes="(min-width: 1024px) 32rem, 20rem"
								className="aspect-square rounded-full bg-dmDark object-cover"
							/>
						</div>
					</div>
					<div className="lg:order-first lg:row-span-2">
						<h2 className="text-3xl font-normal tracking-tight text-dmDark">
							Your Trusted Partner for Tailored Insurance&nbsp;Solutions
						</h2>
						<div className="mt-6 space-y-7 text-lg  text-dmDark">

							<p>
								DM Brokers stands as an independent insurance brokerage firm, specialising in both business and personal insurance solutions. With our extensive experience in the insurance industry, our commitment lies in understanding clients' needs and providing expert advice, tailored coverage options, and exceptional service. Catering to a diverse clientele, from small enterprises to large corporations, as well as individuals and families, we ensure the safeguarding of their assets and effective risk management.
							</p>
							<p>
								Through our robust relationships with top-rated insurance carriers, DM Brokers offers a broad spectrum of coverage options at rates that remain highly competitive. As the industry evolves, we remain vigilant in staying updated with the latest trends and regulations, guaranteeing clients receive cutting-edge and comprehensive insurance solutions.
							</p>
							<p>
								Our core mission at DM Brokers is to provide clients with unparalleled peace of mind, forging lasting relationships founded on trust, integrity, and professionalism. Our commitment to open communication, transparency, and responsiveness ensures clients receive unwavering support, expert advice, and superior insurance services that truly make a difference.
							</p>

							<p>
								Thank you for considering DM Brokers as your insurance partner; we look forward to the opportunity of serving your insurance needs and earning your trust.
							</p>
							{/* <p>
								Our core mission at DM Brokers is to provide clients with unparalleled peace of mind. Through diligent asset protection, risk mitigation, and exceptional customer service, we forge lasting relationships founded on trust, integrity, and professionalism. Our commitment to open communication, transparency, and responsiveness ensures clients receive unwavering support, expert advice, and superior insurance services that truly make a difference. Thank you for considering DM Brokers as your insurance partner; we look forward to the opportunity of serving your insurance needs and earning your trust.
							</p> */}
						</div>
					</div>
					<div className="lg:pl-20">
						<ul role="list">
							(TODO) social links ... 
						</ul>
					</div>
				</div>



      </Container>
    </section>
  )
}
