"use client";
import { motion } from "framer-motion";
import Line from "@/components/line";
import Link from "next/link";

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
			<Line
				b={false}
				delay={1.7}
			/>
			<motion.div
				initial={{ opacity: 0, y: "10px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 2 }}
				className=''>
				<h2 className='noline'>Featured works</h2>
				<Link href={'/work'}><p>view more</p></Link>
			</motion.div>
		</div>
	);
}
