import Intro from "@/components/intro";
import CardHome from '@/components/cardHome';
import { getAllPosts } from "@/lib/api";

export default function Home() {
	const dataProjects = getAllPosts(["title", "slug", "desc", "exp", "year", "tags"]);
	const data = dataProjects.slice(0, 3);
	return (
		<div className='pt-16'>
			<Intro />
			<div className={`w-full flex flex-col gap-32 md:gap-16 items-center pt-8`}>
				{data.map((d, i) => (
					<CardHome
						key={"project-" + i}
						d={d}
						i={i}
					/>
				))}
			</div>
		</div>
	);
}






