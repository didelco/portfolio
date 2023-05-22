"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Line from "@/components/line";
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
		tags?: string;
		img_portada?: string;

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
			className={`w-full flex flex-col     gap-3  justify-between items-center`}>
			<Line delay={delay + 0.6 + i * 0.3} />
			<div className='w-full flex justify-between items-center  '>
				<h3>{d.title}</h3>
				<h3 className='light'>{d.year}</h3>
			</div>
			<Link
				className='w-full'
				href={`/work/` + d.slug}>
				<div className='relative w-full  aspect-video  bg-neutral transition-colors overflow-hidden'>
					
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
			<p className={`w-full`}>{d.desc}</p>

			{d.tags && (
				<div className='w-full flex  gap-1  flex-wrap-reverse'>
					{d.tags.split("/").map((tag) => (
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
