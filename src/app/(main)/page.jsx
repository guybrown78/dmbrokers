import { CallToAction } from '@/components/CallToAction'
import { Hero } from '@/components/Hero'
import { Contact } from '@/components/Contact'
import { Services } from '@/components/Services'
import { Reviews } from '@/components/Reviews'
import { About } from '@/components/About'
import { Message } from '@/components/Message'

export default function Home() {
  return (
    <>
      <Hero />
			<Services />
      <About />
			<CallToAction />
			<Reviews />
      <Contact />
			<Message />
    </>
  )
}
