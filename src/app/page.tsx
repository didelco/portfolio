
import Intro from "@/components/intro";
import Contact from "@/components/contact";
import CardHome from "@/components/cardHome";
import { getAllPosts } from "@/lib/api";
import Section from "@/components/section";

export default function Home() {
	const dataProjects = getAllPosts(["title", "slug", "desc", "exp", "year", "img_portada", "tags", "featured"]);
	const data = dataProjects.slice(0, 3).filter((d, i) => {
		return d.featured;
	});
	const delay = 3;
	return (
		<div
			id='home'
			className='pt-16'>
			<Intro />
			<Section
				title='Featured works'
				delay={1.7}
			/>

			<div className={`w-full flex flex-col gap-16 md:gap-32 items-center pt-24`}>
				{data.map((d, i) => (
					<CardHome
						key={"project-" + i}
						d={d}
						i={i}
						delay={delay}
					/>
				))}
			</div>

			<Contact />
		</div>
	);
}






