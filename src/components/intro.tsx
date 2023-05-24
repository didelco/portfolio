"use client";
import { motion } from "framer-motion";
export default function Intro() {
	return (
		<div className='pt-8 md:pt-32 '>
			<motion.h1
				initial={{ opacity: 0, y: "50px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.2 }}>
				Chema Diez del Corral
			</motion.h1>
			<motion.div
				initial={{ opacity: 0, y: "50px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.6 }}
				className=' mt-1 md:mt-2  text-xl md:text-4xl font-light'>
				Product Designer & Data Visualization
			</motion.div>
			<div className='w-full h-24 md:h-48'></div>
		</div>
	);
}
