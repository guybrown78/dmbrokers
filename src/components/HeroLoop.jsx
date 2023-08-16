import Image from 'next/image'
import waves from '@/images/waves-reverse.png'


export function HeroLoop({
	priority = false,
  ...props
}){
	return (
		<Image
			src={waves}
			alt=""
			className="pointer-events-none absolute inset-0 h-full w-full"
			unoptimized
			priority={priority}
		/>
	);
}
