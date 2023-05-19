"use client";
import { motion, useAnimate } from "framer-motion";

export default function ProjHeader({ title, intro, role, client, sector }: { title: string; intro: string; role: string[]; client: string; sector: string[] }) {
	return (
		<div className='w-full flex flex-col justify-center gap-12'>
			<motion.h2
				initial={{ opacity: 0, y: "20px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='font-bold  text-xl sm:text-3xl md:text-5xl  text-center max-w-4xl   leading-snug'>
				{title}
			</motion.h2>
			<div className='flex flex-col md:flex-row gap-6 w-full'>
				<motion.div
					id='intro'
					initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
					animate={{ opacity: 1, scaleX: 1, x: 0 }}
					transition={{ duration: 1 }}
					className=' text-lg  md:w-2/3 border-t-2 border-neutral'>
					<motion.div
						initial={{ opacity: 0, y: "20px" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className='font-bold text-lg pb-2 '>
						Overview
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: "20px" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.4 }}
						className=' '>
						{intro}
					</motion.div>
				</motion.div>

				<div className=' flex flex-col sm:flex-row md:flex-col justify-between gap-8 w-full md:w-1/3'>
					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className=' text-lg border-t-2 border-neutral w-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2 }}>
							<div className='font-bold text-lg pb-2 '>Roles</div>
						</motion.div>
						{role.map((d, i) => (
							<motion.div
								key={d}
								initial={{ opacity: 0, y: "20px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 2 }}>
								<div className=''>{d}</div>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.2 }}
						className=' text-lg border-t-2 border-neutral w-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2.2 }}>
							<div className='font-bold text-lg pb-2 '>Sector</div>
						</motion.div>
						{sector.map((d, i) => (
							<motion.div
								key={d}
								initial={{ opacity: 0, y: "20px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 2.2 }}>
								<div className=''>{d}</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.4 }}
						className=' text-lg border-t-2 border-neutral w-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2.4 }}>
							<div className='font-bold text-lg pb-2 '>Client</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: "20px" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 2.4 }}>
							<div className=''>Datadis</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.6 }}
						className=' text-lg border-t-2 border-neutral w-full'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2.6 }}>
							<div className='font-bold text-lg pb-2 '>Date</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: "20px" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 2.6 }}>
							<div className=''>2022</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
