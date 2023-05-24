"use client";
import { motion } from "framer-motion";
import Line from "@/components/line";
import Link from "next/link";

export default function Contact() {
	return (
		<div className='pb-16   md:pb-24 pt-48 md:pt-64'>
			<motion.div
				initial={{ opacity: 1, scaleX: 0, x: "-50%" }}
				whileInView={{ opacity: 1, scaleX: 1, x: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className={`border-t-4  border-neutral w-full`}></motion.div>
			<motion.h1
				initial={{ opacity: 0, y: "50px" }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
				className='pt-32  '>
				Let's design together!
			</motion.h1>
			<motion.h3
				initial={{ opacity: 0, y: "50px" }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
				className=' pt-4 pb-12 md:pb-24 font-thin text-xl md:text-3xl md:max-w-lg'>
				If you have any interesting project or adventure let's talk
			</motion.h3>

			<div className='flex flex-col md:flex-row gap-8'>
				<motion.div
					initial={{ opacity: 0, x: "100px" }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 1, ease: "backOut" }}>
					<div className=' hover:scale-110 active:scale-95 active:rotate-1 transition-transform hover:bg-neutral hover:text-neutral-content flex items-center border-4 border-neutral px-6 py-2 md:px-12 md:py-4 text-2xl md:text-4xl font-light p cursor-pointer'>
						Download CV
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: "100px" }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 1.4, ease: "backOut" }}>
					<div className=' hover:scale-110 active:scale-95 active:rotate-1 transition-transform hover:bg-neutral hover:text-neutral-content flex items-center border-4 border-neutral px-6 py-2 md:px-12 md:py-4 text-2xl md:text-4xl font-light p cursor-pointer'>
						Linkedin
					</div>
				</motion.div>
			</div>
		</div>
	);
}
