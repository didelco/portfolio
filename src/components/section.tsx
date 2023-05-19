"use client";
import { motion, useAnimate } from "framer-motion";
import { Children } from "react";

export default function Section({title='Untitle', children , line = false}: {title: string,  line: boolean , children: React.ReactNode } ) {
	
	return (
		<div className='w-full flex flex-col justify-center gap-2 text-xl   leading-snug'>
			{line && (
				<>
					<div
						id='title'
						className='  border-t-2 border-neutral'></div>
					<div className='font-bold text-2xl pb-4 '>{title}</div>
				</>
			)}

			<div className='w-full flex justify-end'>
				<div className='max-w-2xl'>{children}</div>
			</div>
		</div>
	);
}
