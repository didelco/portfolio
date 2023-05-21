import { motion, useScroll } from "framer-motion";

export default function Progress() {
	const { scrollYProgress } = useScroll();
	return (
		<section className='w-full py-8'>
			<motion.div
				id='animated'
				className='w-full h-4 bg-neutral fixed top-0 left-0'
				initial={{ scaleX:0,  y: "-50vw" }}
				animate={{ scaleX: scrollYProgress, y: "calc(-50vw + scrollYProgress * 50vw)" }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: easeIn }}
				viewport={{ once: true }}
				className={`w-full flex flex-col gap-3  justify-between items-center`}
				// style={{ opacity: scrollYProgress }}
			/>
		</section>
	);
}
