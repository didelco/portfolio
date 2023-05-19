"use client";
import { motion } from "framer-motion";
export default function Line({ pains }: { pains: string[] }) {
	return (
		<div>
			<div className='font-normal text-2xl mt-8 mb-4'>Main pain points</div>
			<div className='grid mt-2 gap-8 mb-8 grid-col-1 md:grid-cols-3 '>
				{pains.map((p, i) => (
					<div className=' font-light text-2xl text-primary'>
						<div className='text-neutral  font-normal text-2xl mb-2'>{'#0'+ Math.floor(i+1)}</div>
						{p}
					</div>
				))}
				
			</div>
		</div>
	);
}
