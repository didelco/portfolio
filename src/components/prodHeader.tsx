"use client";
import { motion } from "framer-motion";

export default function ProjHeader({ title, intro, role, sector }: { title: string; intro: string; role: string[]; client: string; sector: string[] }) {
	return (
		<div className='w-full flex flex-col justify-center gap-12'>
			<motion.h1
				initial={{ opacity: 0, y: "20px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className='font-bold  text-xl sm:text-3xl md:text-5xl  text-center max-w-4xl   leading-snug'>
				{title}
			</motion.h1>
			<div className='flex flex-col md:flex-row gap-6 w-full pt-16'>
				<motion.div
					id='intro'
					initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
					animate={{ opacity: 1, scaleX: 1, x: 0 }}
					transition={{ duration: 1 }}
					className=' md:w-2/3    '>
					<motion.h2
						initial={{ opacity: 0, y: "20px" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className='  w-full '>
						Overview
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: "20px" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.4 }}
						className=' '>
						{intro.split("/").map((line, i) => (
							<span
								key={"intro-line-" + i}
								className='w-full'>
								{line}
							</span>
						))}
					</motion.p>
				</motion.div>

				<div className='flex flex-col sm:flex-row md:flex-col  gap-4 w-full md:w-1/3'>
					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1 }}
						className='  w-full  '>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2 }}>
							<h2 className=' pb-4 '>Roles</h2>
						</motion.div>
						{role.map((d, i) => (
							<motion.div
								key={d}
								initial={{ opacity: 0, y: "20px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 2 }}>
								<span>{d}</span>
							</motion.div>
						))}
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.2 }}
						className='w-full '>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2.2 }}>
							<h2 className=' pb-4'>Sector</h2>
						</motion.div>
						{sector.map((d, i) => (
							<motion.div
								key={d}
								initial={{ opacity: 0, y: "20px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 2.2 }}>
								<span>{d}</span>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scaleX: 0, x: "-50%" }}
						animate={{ opacity: 1, scaleX: 1, x: 0 }}
						transition={{ duration: 1, delay: 1.4 }}
						className='w-full '>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 2.4 }}>
							<h2 className='  pb-4 '>Year</h2>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: "20px" }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 2.4 }}>
							<p>2022</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
