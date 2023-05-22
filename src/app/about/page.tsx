'use client'

import { easeIn, motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function About() {
	return (
		<div className=' pt-16 w-full flex flex-col md:flex-row gap-32'>
			<div className='w-full md:w-2/3'>
				<motion.h1
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1.5, y: 0 }}
					transition={{ duration: 1, delay: 0, ease: "circOut" }}>
					Hello! I am Chema, a product designer and a creative technologist
				</motion.h1>{" "}
				<motion.div
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
					className='py-12 text-lg   max-w-xl'>
					Senior Product Designer and Creative Technologist with 12+ years of experience. <br />
					<br />I Design Digital Tools and Products in various sectors (Energy, proptech, Retail, Banking, IoT and more). <br /> I am comfortable in projects with a high level of
					uncertainty and products with complex business logic. I studied Architecture, I am a passionate maker and a data visualisation geek. I define myself as a creative and
					curious person who loves to teach and learn. I have worked remotely with clients from multiple countries in both Spanish and English. Some clients I have worked with are
					Tesco (UK), Solera (USA), Santander (Spain), Telefónica (Spain), Megaton (Russia), Datadis (Spain), UrbanData Analytics (Spain), Lledó (Spain) among others. <br /> <br />{" "}
					A deep understanding of the problems, a wide knowledge of technology and a creative vision is what I bring to create products that contribute to a more sustainable future
					and improve people`s lives.
				</motion.div>{" "}
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
			<div className='w-full md:w-1/3'>
				<motion.div
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1, ease: "circOut" }}
					className=''>
					<h2>Skills</h2>
					<p>hola</p>
					
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.25, ease: "circOut" }}
					className=''>
					<h2>Skills</h2>
					<p>hola</p>
					
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: "50px" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.5, ease: "circOut" }}
					className=''>
					<h2>Skills</h2>
					<p>hola</p>
					
				</motion.div>
			</div>
		</div>
	);
}



function Item() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});

	return (
		<section className='w-full py-8'>
			<div
				ref={ref}
				className='w-full'>
				<motion.div
					initial={{ opacity: 0, y: "300px" }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5, ease: easeIn }}
					viewport={{ once: true }}
					className={`w-full flex flex-col gap-3  justify-between items-center`}
					// style={{ opacity: scrollYProgress }}
				>
					<div className='w-full flex justify-between items-center  '>
						<h3>Superstudio</h3>
						<h3 className='light'>2023</h3>
					</div>
					<div className='w-full h-96 bg-pink-200 hover:bg-red-300 transition-colors'></div>
				</motion.div>
			</div>
		</section>
	);
}









