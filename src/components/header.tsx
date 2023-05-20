"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Line from "@/components/line";

export default function Header() {
	const pathname = usePathname();
	const rutas = pathname.split("/").slice(1);

	const [selected, setSelected] = useState(rutas[0]);
	console.log(rutas);
	const menu = [
		{ name: "home", url: "/" },
		{ name: "work", url: "/work" },
		{ name: "about", url: "/about" },
	];
	return (
		<div className='my-4'>
			<Line
				delay={1}
				b={true}
			/>
			<div className='my-4'>
				<ul className='flex gap-16 '>
					{menu.map((item) => (
						<li
							key={item.name}
							className={`relative cursor-pointer text-2xl`}>
							<Link
								href={item.url}
								onClick={() => setSelected(item.name)}
								className={`h-10 flex items-center text-2xl ${rutas[0] == item.url.slice(1) ? "font-semibold" : "font-light"}`}>
								{item.name}
							</Link>
							{item.name === selected ? (
								<>
									{console.log("move")}
									<motion.div
										className='w-full absolute h-1  bg-neutral'
										layoutId='underline'
									/>
								</>
							) : null}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
