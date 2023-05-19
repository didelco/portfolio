"use client";
import { motion, useAnimate, stagger } from "framer-motion";
import Works from "@/components/works";
import Line from "@/components/line";

export default function Home() {
	return (
		<div className='pt-16'>
			<motion.div
				initial={{ opacity: 0, y: "50px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.2 }}
				className='mt-16 text-3xl sm:text-4xl md:text-6xl  font-bold '>
				Chema Diez del Corral
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: "50px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.6 }}
				className='mt-2  text-2xl md:text-4xl font-light   '>
				Product Designer & Data Visualization
			</motion.div>

			<div className='w-full h-48'></div>
			<motion.div
				initial={{ opacity: 1, scaleX: 0, x: "-50%" }}
				animate={{ opacity: 1, scaleX: 1, x: 0 }}
				transition={{ duration: 1, delay: 1.6 }}
				className='border-t-4  border-neutral w-full'></motion.div>
			<motion.div
				initial={{ opacity: 0, y: "10px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 2 }}
				className='px-0 py-2 text-2xl font-bold uppercase leading-none '>
				Works
			</motion.div>
			<Works
				max={4}
				maxCol={2}
				filters={false}
				delay={2}
			/>
		</div>
	);
}
