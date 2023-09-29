'use client'

import clsx from 'clsx';
import { useState } from 'react';
import { useHeroLoop  } from '@/libs/HeroLoopContext';
import { useEffect } from 'react';

export function HeroLoop({
	priority = false,
  ...props
}){


	const [focus, setFocus] = useState("green");
	let ended = []
	
	const { state, handleTransitionEnd } = useHeroLoop();

	const lozengeClasses = "absolute block w-9 rounded-full transition-all"
	const lozenges = [
		{ 
			id:'yellow-big', focus:"yellow", colour:"bg-dmYellow",
			xPosOut:'top-[244px]', xPosIn:'top-0',  
			yPos:'right-0', h:'h-[451px]',
			transIn:'duration-200 delay-200 ease-in-out',
			transOut:'duration-200 delay-75 ease-out',
		},
		{ 
			id:'yellow-medium', focus:"yellow", colour:"bg-dmYellow",
			xPosOut:'top-[306px]', xPosIn:'top-[53px]', 
			yPos:'right-[96px]', h:'h-[332px]',
			transIn:'duration-300 delay-100 ease-in-out',
			transOut:'duration-150 delay-100 ease-out',
		},
		{ 
			id:'yellow-small', focus:"yellow", colour:"bg-dmYellow",
			xPosOut:'top-[370px]', xPosIn:'top-[132px]', 
			yPos:'right-[194px]', h:'h-[183px]',
			transIn:'duration-500 delay-0 ease-in-out',
			transOut:'duration-100 delay-150 ease-out',
		},
		{ 
			id:'green-big', focus:"green", colour:"bg-dmGreen", 
			xPosIn:'bottom-[310px]', xPosOut:'bottom-[25px]', 
			yPos:'left-0', h:'h-[350px]',
			transIn:'duration-500 delay-200 ease-in-out',
			transOut:'duration-200 delay-75 ease-out',
		},
		{ 
			id:'green-small', focus:"green", colour:"bg-dmGreen",
			xPosIn:'bottom-[352px]', xPosOut:'bottom-[76px]', 
			yPos:'left-[87px]', h:'h-[252px]',
			transIn:'duration-300 delay-150 ease-in-out',
			transOut:'duration-150 delay-75 ease-out',
		}
	]

	useEffect(() => {
		if(state.value === "green" || state.value === "yellow-green"){
			setFocus("green")
		}else{
			setFocus("yellow")
		}
	}, [state])

	useEffect(() => {
		ended = [];
	}, [focus])


	const onTransitionEnded = (e)=> {
		ended.push(e.target.id)
		// console.log(ended.length)
		if(ended.length === lozenges.length){
			handleTransitionEnd();
		}
	}

	return (
		<div className='absolute inset-0 h-full w-full'> 

			<div className='absolute block h-full w-full animate-fade animate-once animate-duration-750 animate-delay-0 animate-ease-in animate-normal'>
				{
					lozenges.map(lozenge => (
						<div
							key={lozenge.id}
							id={lozenge.id}
							onTransitionEnd={onTransitionEnded}
							className={clsx(
								lozengeClasses, 
								lozenge.colour, lozenge.yPos, lozenge.h, 
								focus === lozenge.focus ? lozenge.xPosIn : lozenge.xPosOut,
								focus === lozenge.focus ? lozenge.transIn : lozenge.transOut
							)}
						/>
					))
				}
			</div>
		</div>
	);
}
