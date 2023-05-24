"use client";
import { motion } from "framer-motion";
import Line from "@/components/line";

export default function Section({ delay = 0, title }: { delay?: number; title: string }) {
	return (
		<div className='w-full'>
			<Line
				b={false}
				delay={delay}
			/>
			<motion.div
				initial={{ opacity: 0, y: "10px" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: delay + 0.3 }}
				className=''>
				<h2 className='noline'>{title}</h2>
			</motion.div>
		</div>
	);
}
