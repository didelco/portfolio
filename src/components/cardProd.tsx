"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
		tags?: string[];
	};
	i: number;
	delay?: number;
}) {
	console.log(d);
	return (
		
		<motion.div
			key={i}
			initial={{ opacity: 0, y: "50px" }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: delay + i * 0.15, ease: "easeIn" }}
			className={` flex flex-col   pt-4 gap-4 border-t-2 border-neutral justify-between`}>
			<div className='flex flex-col'>
				<div className='w-full flex justify-between pb-4'>
					<h3 className={`text-3xl font-semibold mb-3 `}>{d.title}</h3>
					<div className='  font-light text-2xl'>{d.year}</div>
				</div>
				<Link href={`/work/`+d.slug}>
					<div className='w-full bg-pink-200 h-96 hover:bg-red-300 transition-colors'></div>
				</Link>
				<p className={`text-2xl font-light mt-4 `}>{d.desc}</p>
				<div className='flex  flex-row-reverse gap-2'>
					
				</div>
			</div>

			{d.tags && (
				<div className='w-full flex  gap-1 mt-4 flex-wrap-reverse'>
					{d.tags.map((tag) => (
						<a
							href={`/work/tags/${tag.toLowerCase().replace(" ", "_")}`}
							key={tag.replace(" ", "-")}>
							<div className=' border-2 px-4 py rounded-2xl border-neutral hover:border-primary hover:text-primary '>{tag}</div>
						</a>
					))}{" "}
				</div>
			)}
		</motion.div>
	);
}
