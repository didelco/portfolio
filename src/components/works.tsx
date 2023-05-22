import CardProject from "./cardProd";
import { getAllPosts } from "@/lib/api";

export default function Works({ max = 1000, maxCol = 3, filters = false, delay = 0 }: { max?: number; maxCol?: number; filters?: boolean; delay?: number }) {
	const dataProjects = getAllPosts(["title", "slug", "desc", "exp", "year", "tags", 'img_portada']);
	const data = dataProjects.slice(0, max);
	return (
		<>
			{filters && (
				<div className=' '>
					<p className='text-xl '>Filters</p>
				</div>
			)}

			<div
				className={`py-8 w-full grid   gap-x-12 gap-y-24 grid-cols-1 ${
					maxCol > 3 ? "md:grid-cols-2 xl:grid-cols-4" : maxCol > 2 ? "md:grid-cols-2 xl:grid-cols-3" : maxCol > 1 ? "md:grid-cols-2" : ""
				} `}>
				{data.map((d, i) => (
					<CardProject
						key={"project-" + i}
						d={d}
						i={i}
						delay={delay}
					/>
				))}
			</div>
		</>
	);
}
