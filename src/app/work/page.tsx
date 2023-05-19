import { getAllPosts } from "@/lib/api";

import Works from "@/components/works";

import Link from "next/link";

export default function Home() {
	const posts = getAllPosts(["title",  "slug", "desc" , "exp", 'year' , 'tags']);
	
console.log({posts})
	return (
		<section className="mt-16">	
			<p className='text-3xl mb-6'>All projects</p>
			<Works />
		</section>
		
	);
}
