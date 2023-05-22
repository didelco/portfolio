import CardProject from "@/components/cardProd";
import { getAllPosts } from "@/lib/api";
import IntroWorks from '@/components/introWorks'

export default function Works() {
	const dataProjects = getAllPosts(["title", "slug", "desc", "exp", "year", "tags", "img_portada"]);
	const data = dataProjects.slice(0, 10);
	const filters = false
	const delay= 0.7
	return (
		<section className='mt-16 md:mt-36'>
			
		<IntroWorks/>
		{filters && (
				<div className=' '>
					<p className='text-xl '>Filters</p>
				</div>
			)}
			<div
				className={`py-8 w-full grid   gap-x-12 gap-y-24 grid-cols-1 md:grid-cols-2 xl:grid-cols-4`}>
				{data.map((d, i) => (
					<CardProject
						key={"project-" + i}
						d={d}
						i={i}
						delay={delay}
					/>
				))}
			</div>
		</section>
	);
}







	

