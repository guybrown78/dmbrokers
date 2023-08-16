import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
		green: 'relative overflow-hidden bg-dmGreen text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-dmGreen-darker/10 active:bg-dmGreen-lighter active:text-white/80 before:transition-colors',
		yellow: 'relative overflow-hidden bg-dmYellow text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-dmYellow-darker/10 active:bg-dmYellow-lighter active:text-white/80 before:transition-colors',
    white:
      'bg-dmLight text-dmDark hover:bg-dmLight-darker/10 active:bg-dmLight-darker/10 active:text-dmDark-lighter',
    gray: 'bg-dmDark text-dmLight hover:bg-dmDark-darker active:bg-dmDark-lighter active:dmDark-lighter',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
		white: 'border-dmLight text-dmLight hover:border-dmLight-darker active:border-dmLight-lighter active:text-dmLight-lighter',
  },
}

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'gray', className, href, ...props },
  ref
) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className
  )

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
