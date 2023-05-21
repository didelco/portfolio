"use client";
import Line from '@/components/line'

export default function Footer() {
	return (
		<div className='w-full mt-16 mb-8'>
			<Line />
			<div className='w-full flex justify-between pt-6'>
				<div className='flex w-full gap-16'>
					<div className='flex flex-col'>
						<div className='footerTitle'>Design & Code </div>
						<p className='w-full'>Chema Diez del Corral</p>
					</div>
					<div className=' flex flex-col'>
						<div className='footerTitle'>Version </div>
						<p className='w-full'>2023.05</p>
					</div>
				</div>
				<div className='w-1/3 flex flex-col'>
					<div className='footerTitle'>Contact </div>
					<div className=' flex gap-4'>
						<p className=' w-auto'>Linkedin</p>
						<p className=' w-auto'>Mail</p>
						<p className=' w-auto'>Phone</p>
					</div>
				</div>
			</div>
		</div>
	);
}



