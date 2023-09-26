'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

	const router = useRouter();
	const pathname = usePathname();

	const handleAnchor = (event, href) => {
		event.preventDefault();
		console.log(pathname)
		if(pathname === "/"){
			if (href.includes("#")) {
				event.preventDefault();
				window.location.hash = ''
				window.location.hash = href
			}
		}else{
			router.push(`../${href}`)
		}
	}

  return [
    ['Services', '#services'],
		['About', '#about'],
    ['Reviews', '#reviews'],
    ['Contact', '#contact'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
			onClick={(e) => handleAnchor(e, href)}
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
