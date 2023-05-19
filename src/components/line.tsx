"use client";
import { motion } from "framer-motion";
export default function Line() {
	return (
		<div className='w-full'>
			<motion.div
				initial={{ opacity: 1, scaleX: 0, x: "-50%" }}
				animate={{ opacity: 1, scaleX: 1, x: 0 }}
				transition={{ duration: 1, delay: 1.2 }}
				className='border-t-8  border-neutral w-full'></motion.div>
		</div>
	);
}
