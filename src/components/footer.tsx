"use client";
import Line from '@/components/line'

export default function Footer() {
	return (
		<div className='w-full mt-16 mb-4  md:mb-8'>
			<Line />
			<div className='w-full flex flex-col md:flex-row gap-4 justify-between pt-4 md:pt-6'>
				<div className='flex w-full gap-16'>
					<div className='flex flex-col'>
						<div className='footerTitle'>Design & Code </div>
						<p className='footerContent'>Chema Diez del Corral</p>
					</div>
					<div className=' flex flex-col'>
						<div className='footerTitle'>Version </div>
						<p className='footerContent'>2023.05</p>
					</div>
				</div>
				<div className='w-1/3 flex flex-col'>
					<div className='footerTitle'>Contact </div>
					<div className=' flex gap-4 '>
						<p className=' footerContent'>Linkedin</p>
						<p className=' footerContent'>Mail</p>
						<p className=' footerContent'>Phone</p>
					</div>
				</div>
			</div>
		</div>
	);
}



