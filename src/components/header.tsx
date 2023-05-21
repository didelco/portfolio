"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Line from "@/components/line";
import SwitchTheme from "@/components/themeSwitch";

export default function Header() {
	const pathname = usePathname();
	const rutas = pathname.split("/").slice(1);
	const [selected, setSelected] = useState(rutas[0]);

    useEffect(() => {
const name = pathname.split("/").slice(1)[0] == '' ? 'home' :pathname.split("/").slice(1)[0];
		setSelected(name);
		}, [pathname]);
console.log(selected)
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
			<div className='my-4 flex justify-between items-center'>
				<div className=' hidden sm:block  text-2xl w-full'>CDDC</div>
				<ul className='flex gap-4 sm:gap-8 md:gap-16 w-full justify-start sm:justify-center'>
					{menu.map((item) => (
						<li
							key={item.name}
							className={`relative cursor-pointer text-2xl`}>
							<Link
								href={item.url}
								onClick={() => setSelected(item.name)}
								className={`museo h-10 flex items-center text-2xl ${rutas[0] == item.url.slice(1) ? "font-semibold" : "font-light"}`}>
								{item.name}
							</Link>
							{item.name === selected ? (
								<>
									<motion.div
										className='w-full absolute h-1  bg-neutral'
										layoutId='underline'
									/>
								</>
							) : null}
						</li>
					))}
				</ul>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 1.8 }}
					className='w-full flex justify-end items-center mr-2'>
					<SwitchTheme />
				</motion.div>
			</div>
		</div>
	);
}
