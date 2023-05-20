"use client";
import { motion } from "framer-motion";
export default function Line({ pains }: { pains: string[] }) {
	return (
		<div className='py-8'>
			<h2 className=' py-12'>Main pain points</h2>
			<div className='grid mt-2 gap-8 mb-8 grid-col-1 md:grid-cols-3 '>
				{pains.map((p, i) => (
					<div
						key={"pain-" + i}
						className=' font-light text-2xl text-primary'>
						<div className='text-neutral  font-normal text-2xl mb-2'>{"#0" + Math.floor(i + 1)}</div>
						{p}
					</div>
				))}
			</div>
		</div>
	);
}
