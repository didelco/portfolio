"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Line from "@/components/line";

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
		tags?: string;
	};
	i: number;
	delay?: number;
}) {

	return (
		<motion.div
			key={i}
			initial={{ opacity: 0, y: "100px" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: delay + i * 0.3, ease: "circOut" }}
			className={`w-full max-md:max-w-md flex flex-col ${i % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  md:justify-between gap-4 md:gap-16`}>
			<Link
				className='w-full cursor-pointer'
				href={`/work/` + d.slug}>
				<div className=' aspect-square  bg-pink-200 hover:bg-red-300 transition-colors' />
			</Link>

			<div className={`w-full flex flex-col  justify-center ${i % 2 == 0 ? " items-start" : "  md:items-end"}`}>
				<div className={`flex flex-col gap-4 md:max-w-sm items-start text-left ${i % 2 == 0 ? "" : "md:items-end md:text-right"}`}>
					<p className='p-0 m-0 '>
						{d.title} <span className='text-gray-500 '>({d.year})</span>
					</p>
					<h2 className={`w-full text-2xl noline p-0 max-md:pr-4`}>{d.desc}</h2>
					<div className={`w-full flex justify-end ${i % 2 == 0 ? "md:justify-start" : ""}`}>
						<Link
							className=' cursor-pointer text-sm flex items-center gap-2 btn btn-outline btn-neutral  rounded-none'
							href={`/work/` + d.slug}>
							go to project{" "}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className=' stroke-neutral  w-8 h-8'
								viewBox='0 0 24 24'
								stroke-width='1'
								stroke-linecap='square'
								stroke-linejoin='square'>
								<path d='M5 12l14 0'></path>
								<path d='M13 18l6 -6'></path>
								<path d='M13 6l6 6'></path>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
