import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/md2html";
import ProjHeader from "@/components/prodHeader";
import Pains from "@/components/painPoints";
import Image from "next/image";

export default async function Post({ params }: { params: { slug: string } }) {
	const post = getPostBySlug(params.slug, [
		"title",
		"desc",
		"tags",
		"sector",
		"pains",
		"content",
		"img_cover",
		"overview",
		"context",
		"challenges",
		"solutions",
		"deepdive",
		"finish",
	]);

	const content = await markdownToHtml(post.content || "");
	console.log(post.content);
	console.log(post.context);

	return (
		<div className='flex flex-col items-center w-full'>
			<div className='max-w-4xl my-16'>
				<Image
					alt={"Main image " + post.title}
					className='w-full p-16'
					src={post.img_cover}
				/>

				<ProjHeader
					title={post.desc}
					role={post.tags.split("/")}
					sector={post.sector.split("/")}
					client={post.client}
					intro={post.overview}
				/>
				<div className='flex flex-col items-end gap-4'>
					{post.context != undefined && (
						<>
							<h2>Context</h2>
							{post.context.split("/").map((line, i) => (
								<p key={"context-line-" + i}>{line}</p>
							))}
						</>
					)}
					{post.challenges != undefined && (
						<>
							<h2>Challenges</h2>
							{post.challenges.split("/").map((line, i) => (
								<p key={"challenges-line-" + i}>{line}</p>
							))}
						</>
					)}
					<Pains pains={post.pains.split("/")} />

					{post.solutions != undefined && (
						<>
							<h2>Solutions</h2>
							{post.solutions.split("/").map((line, i) => (
								<p key={"solutions-line-" + i}>{line}</p>
							))}
						</>
					)}

					{post.deepdive ? (
						post.finish ? (
							<div
								className={`w-full  flex flex-col items-end `}
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						) : (
							<div className='w-full flex justify-center items-center h-48 border-4 border-neutral mt-24 text-4xl'>Deep Dive Coming Soon...</div>
						)
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
