import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/md2html";
import markdownStyles from "./mdstyle.module.css";
import ProjHeader from "@/components/projHeader";
import Pains from "@/components/painPoints";

export default async function Post({ params }: { params: { slug: string } }) {
	const post = getPostBySlug(params.slug, ["title", "desc", "tags", "sector", "client", "pains", "content", "img_cover"]);

	const content = await markdownToHtml(post.content || "");

	return (
		<div className='flex flex-col justify-center w-full'>
			<div className=' max-w-4xl my-16'>
				<img
					className='w-full p-16'
					src={post.img_cover}
				/>

				<ProjHeader
					title={post.desc}
					role={post.tags != undefined ? post.tags : []}
					sector={post.sector != undefined ? post.sector : []}
					client={post.client}
					intro='The project is a Datadis website redesign.
					The web consisted of two very different parts; the private web that was a tool that served users to see their consumption and manage permissions for access to their data and the other part was a public web that had a marketing purpose.
				 '
				/>
				<Pains pains={post.pains} />
				<div
					className={`w-full  flex flex-col items-end ${markdownStyles["markdown"]}`}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</div>
	);
}
