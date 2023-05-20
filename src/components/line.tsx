"use client";
import { motion } from "framer-motion";
export default function Line({ delay = 0, b = false }: { delay?: number; b?: boolean }) {
	return (
		<motion.div
			initial={{ opacity: 1, scaleX: 0, x: "-50%" }}
			animate={{ opacity: 1, scaleX: 1, x: 0 }}
			transition={{ duration: 1, delay: delay }}
			className={`${b ? "border-t-8" : "border-t-4"}  border-neutral w-full`}></motion.div>
	);
}
