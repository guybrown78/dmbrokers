
'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/libs/storageHelper';
import { useState, useEffect } from 'react';
import { Button } from './Button';
import clsx from 'clsx'

export default function CookieBanner(){

	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect (() => {
			const storedCookieConsent = getLocalStorage("cookie_consent", null)
			setCookieConsent(storedCookieConsent)
	}, [setCookieConsent])


	useEffect(() => {
			const newValue = cookieConsent ? 'granted' : 'denied'
			window.gtag("consent", 'update', {
					'analytics_storage': newValue
			});
			setLocalStorage("cookie_consent", cookieConsent)

	}, [cookieConsent]);

	return (
		<>

			<div className={clsx(
				cookieConsent != null ? "hidden" : "block",
				"pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6 z-50"
			)}>
				<div className="pointer-events-auto mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
					<p className="text-sm leading-6 text-gray-900">
						We use cookies to enhance your browsing experience and analyse our traffic. By clicking <span className='font-semibold'>Accept All</span>, you consent to our use of cookies. See our{' '}
						<Link href="/info/cookie" className="font-semibold text-salvify-primary">cookie policy</Link>
						.
					</p>
					<div className="mt-4 flex items-center gap-x-5">
						<Button onClick={() => setCookieConsent(true)}>Accept all</Button>
						<Button color='white' onClick={() => setCookieConsent(false)}>Reject all</Button>
					</div>
				</div>
			</div>	

		</>
			
	)}


	