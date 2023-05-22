"use client";
import { motion } from "framer-motion";
import Line from "@/components/line";
import Link from "next/link";

export default function IntroWorks() {
	return (
		<div className='pt-8 md:pt-32 mb-8'>
			<Line
				b={false}
				delay={0}
			/>
			<motion.div
				initial={{ opacity: 0, y: "50px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3, ease: 'circOut' }}
				className=''>
				<h2 className='noline'>All projects</h2>
			</motion.div>
		</div>
	);
}
