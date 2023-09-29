import { useHeroLoop  } from '@/libs/HeroLoopContext';
import clsx from 'clsx';

export function HeroLoopTypography(){
	
	const { state } = useHeroLoop();

	const divClasses = "absolute block w-full top-0";
	const divInClasses = "animate-fade-left animate-duration-[1000ms] animate-ease-in-out";
	const divOutClasses = "animate-fade-right animate-once animate-duration-[600ms] animate-ease-in animate-reverse";
	const h3Classes = "m-0 text-2xl font-semibold text-dmDark ";
	const h3InClasses = "animate-fade-left animate-duration-[350ms] animate-ease-in-out";
	const h3OutClasses = "animate-fade-right animate-once animate-duration-[350ms] animate-ease-in animate-reverse";
	const pClasses = "text-xl font-medium text-dmDark my-1 animate-delay-150";
	const pInClasses = "animate-fade-left animate-duration-[450ms] animate-ease-in-out";
	const pOutClasses = "animate-fade-right animate-once animate-duration-[350ms] animate-ease-in animate-reverse";

	return (
		<div className="relative block w-full text-center lg:text-left lg:mt-0 animate-fade animate-once animate-duration-750 animate-delay-0 animate-ease-in animate-normal">

					<div className={
						clsx(
							divClasses,
							state.value === "green" ? divInClasses : divOutClasses,
						)}>
						<h3 className={
							clsx(
								h3Classes,
								state.value === "green" ? h3InClasses : h3OutClasses
							)}>
							Your Personal Protection Partner
						</h3>
						<p className={
							clsx(
								pClasses,
								state.value === "green" ? pInClasses : pOutClasses
							)}>Complete peace of mind.</p>
					</div>
					


					<div className={
						clsx(
							divClasses,
							state.value === "yellow" ? divInClasses : divOutClasses,
						)}>
						<h3 className={
							clsx(
								h3Classes,
								state.value === "yellow" ? h3InClasses : h3OutClasses
							)}>Safeguarding Your Business</h3>
						<p className={
							clsx(
								pClasses,
								state.value === "yellow" ? pInClasses : pOutClasses
							)}>with Expert Insurance Services.</p>
					</div>
						

		</div>
		
	);
}
