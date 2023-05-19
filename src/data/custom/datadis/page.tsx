"use client";
import Image from "next/image";
import ProjHeader from "../../../components/projHeader";
import Section from "../../../components/section";
import { motion } from "framer-motion";
export default function Datadis() {
	return (
		<div className='flex flex-col items-center  py-16 w-full'>
			<div className=' max-w-4xl flex flex-col gap-12 '>
				<motion.div
					initial={{ opacity: 0, y: "20px" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='w-full flex justify-center'>
					<Image
						className=' aspect-auto'
						src='/photos/datadis_main.jpg'
						width={640}
						height={430}
						alt='datadis main'
					/>
				</motion.div>
				<ProjHeader
					title='#Energy control dashboard for homes and companies'
					role={["Product designer", "UX", "Dataviz", "Service Design"]}
					sector={["Energy"]}
					intro='The project is a Datadis website redesign.
					The web consisted of two very different parts; the private web that was a tool that served users to see their consumption and manage permissions for access to their data and the other part was a public web that had a marketing purpose.
				 '
					client='client A'
				/>
				<Image
					className=' aspect-auto'
					src='/photos/datadis_main.jpg'
					width={640}
					height={430}
					alt='Accede a los consumos eléctricos de todos tus contratos
En Datadis te conectamos con tus datos de consumo eléctrico, en cualquier distribuidora donde esté conectado tu suministro.'
				/>
				<Section
					line={true}
					title='Context'>
					Datadis is a platform created by distribution companies to simplify access to consumer data. Users can check all electrical contracts in your name from a single site,
					regardles of company contracted. <br /> <br />
					When contacting us, they had a clear intention to improve the user experience of their website.
					<br />
					<br />
				</Section>
				<Section
					line={true}
					title='Challenges'>
					the challenges are many and varied. The web existed when we started working on it, and the architecture did not work.
					<br />
					In addition to the structure, the way of addressing the user was not appropriate, we had to be precise with the terms used, but move away from the language excessively
					technical and legal. <br /> <br />
					User registration was a very complex process, it was necessary to verify the identity of the person or companies that registered.
					<br />
					<br />
					We had to design the platform for very different user profiles with different use of the platform and information they consult. <br />
					<br />
					We cannot save any user data in the database, which forced us to load all the data every time, causing very high loading times and loss of data. alerts when something
					goes wrong.
				</Section>
				<div>
					<div className='font-normal text-2xl mt-8 mb-4'>Main pain points</div>
					<div className='grid mt-2 gap-8 mb-8 grid-col-1 md:grid-cols-3 '>
						<div className=' font-light text-2xl text-primary '>
							<div className='text-neutral  font-normal text-2xl mb-2'>#01</div>
							Complex user registration, users need to identify themselves to be verified.
						</div>
						<div className=' font-light text-2xl text-primary '>
							<div className='text-neutral  font-normal text-2xl mb-2'>#02</div> Data takes a long time to load. The user does not know what data exists or if there is an error.
						</div>
						<div className=' font-light text-2xl text-primary '>
							<div className='text-neutral  font-normal text-2xl mb-2'>#03</div>Messages are written from a legal perspective. Users do not understand them.
						</div>{" "}
					</div>
				</div>
				<Section
					line={true}
					title='Solutions'>
					To troubleshoot this project we had to go a bit further than we usually need to go into projects.
					<br />
					We had to go deep inside Datadis to understand the processes within Datadis and discover that exceptions were the rule and the validation process It required many manual
					steps, which we proceeded to categorize, group, and simplify the number of cases, but we could not automate them.
					<br />
					<br />
					To simplify registration, we had to go through all the cases on similar websites to identify opportunities to simplify the process.
					<br />
					<br />
					And we also had to go further in the field of programming by proposing strategies to reduce the time of calls to the API, such as changing the order of calls using
					Bayesian methods to reduce loading time most of the time.
					<br />
					<br />
					We dove into designing the API, both the documentation and the call nomenclature.
					<br />
					<br />
					And many other things that if you want to discover in more detail you can read the full case
				</Section>
			</div>{" "}
			<div className=' mt-16  w-screen h-96 bg-gray-200 flex justify-center items-center text-6xl font-light '>Deep dive cooming soon...</div>
		</div>
	);
}
