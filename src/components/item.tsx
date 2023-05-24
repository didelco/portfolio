"use client";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Item() {
	const [pos, setPos] = useState(0);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});
	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		setPos(latest);
		console.log(latest);
	});

	return (
		<section className='w-full py-8'>
			<div
				ref={ref}
				className='w-full'>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: pos, y: 100 - pos }}
					transition={{ duration: 0.3, ease: "easeIn" }}
					className={`w-full flex flex-col gap-3  justify-between items-center`}
					// style={{ opacity: scrollYProgress }}
				>
					<div className='w-full flex justify-between items-center  '>
						<h3>Superstudio</h3>

						<h3 className='light'>{}</h3>
					</div>
					<div className='w-full h-96 bg-pink-200 hover:bg-red-300 transition-colors'></div>
				</motion.div>
			</div>
		</section>
	);
}

// function Component() {
// 	const { scrollYProgress } = useScroll();

// 	return <motion.div style={{ scaleX: scrollYProgress }} />;
// }
