"use client";
import { motion, useAnimate } from "framer-motion";


export default function Footer() {
	const menu = [
		{ name: "home", url: "/" },
		{ name: "about me", url: "/me" },
		{ name: "works", url: "/works" },
		{ name: "CV", url: "/cv" },
	];
	return (
		<div className='w-full my-16'>
			<ul className='flex gap  justify-between w-full '>
				{menu.map((d, i) => (
					<li
						key={i}
						
						className='px-0 py-2 text-sm uppercase '>
						<a href={d.url}>{d.name}</a>
					</li>
				))}
			</ul>
			<div className='border-t-8  border-neutral w-full'></div>
		</div>
	);
}
