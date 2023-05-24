"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

export default function CardProject({
	d,
	i,
	delay = 0,
}: {
	d: {
		title?: string;
		slug?: string;
		desc?: string;
		exp?: boolean;
		year?: number;
		img_portada?: string;
		tags?: string;
	};
	i: number;
	delay?: number;
}) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});

	return (
		<motion.div
			key={i}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: delay }}
			className='w-full'>
			<motion.div
				key={i}
				initial={{ opacity: 0, y: "100px" }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "circOut" }}
				viewport={{ once: true }}
				className={`w-full  flex flex-col ${i % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  md:justify-between gap-4 md:gap-16`}>
				<Link
					className='w-full cursor-pointer'
					href={`/work/` + d.slug}>
					<div className='relative w-full  aspect-video  bg-neutral transition-colors overflow-hidden'>
						{" "}
						{d.img_portada != null && (
							<Image
								fill={true}
								alt={"Main image " + d.title}
								className=' md:hover:scale-110 md:hover:-rotate-3 transition-transform ease-in-out md:hover:opacity-80'
								src={d.img_portada}
							/>
						)}
					</div>
				</Link>

				<div className={`w-full flex flex-col  justify-center ${i % 2 == 0 ? " items-start" : "  md:items-end"}`}>
					<div className={`w-full flex flex-col  gap-3 md:gap-4  items-start text-left ${i % 2 == 0 ? "" : "md:items-end md:text-right"}`}>
						<p className='p-0 m-0 '>
							{d.title} <span className='text-gray-500 '>({d.year})</span>
						</p>
						<h2 className={`w-full text-2xl noline p-0 m-0 max-md:pr-4`}>{d.desc}</h2>
						<div className={`w-full flex justify-end ${i % 2 == 0 ? "md:justify-start" : ""}`}>
							<Link
								className='pl-2 md:pl-6 md:mt-2 stroke-neutral hover:stroke-neutral-content cursor-pointer text-sm flex items-center gap-2 btn btn-sm md:btn-md btn-ghost  md:btn-outline border-2 btn-neutral  rounded-none hover:bg-neutral hover:border-neutral'
								href={`/work/` + d.slug}>
								View Product{" "}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className=' w-8 h-8'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									strokeLinecap='square'
									strokeLinejoin='miter'>
									<path d='M5 12l14 0'></path>
									<path d='M13 18l6 -6'></path>
									<path d='M13 6l6 6'></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}








