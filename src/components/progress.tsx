'use client'
import { motion, useScroll, easeIn } from "framer-motion";

export default function Progress() {
	const { scrollYProgress } = useScroll();
	return (
		<div
			id='progress'
			className=''>
			<motion.div
				id='animated'
				className='fixed top-0 left-0 right-0 h-8 bg-neutral origin-left '
				transition={{ duration: 1, delay: 0.5, ease: easeIn }}
				style={{ scaleX: scrollYProgress }}
			/>
		</div>
	);
}



