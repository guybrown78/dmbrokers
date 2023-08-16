
import clsx from 'clsx'


export function HeroFrame({
  className,
  children,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[366/729]', className)} {...props}>
      <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-small" />
      <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden pt-[calc(23/318*100%)]">
        {children}
      </div>
    </div>
  )
}