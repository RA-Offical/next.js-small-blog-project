import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

// type for the dynamic route params
type Props = {
	params: {
		postId: string;
	};
};

/**
 * Generates metadata for the page based on the postId.
 * @param {Props} props - The props object containing the postId.
 * @returns {Metadata} - The generated metadata for the page.
 */
export function generateMetadata({ params: { postId } }: Props): Metadata {
	const posts = getSortedPostsData();
	const post = posts.find((post) => post.id === postId);

	if (!post) {
		return {
			title: "Post not found",
		};
	}

	return {
		title: post.title,
	};
}

/**
 * Renders the SinglePost component.
 * @param {Props} props - The props object containing the postId.
 * @returns {JSX.Element} - The rendered SinglePost component.
 */
async function SinglePost({ params: { postId } }: Props) {
	const posts = getSortedPostsData();
	const post = posts.find((post) => post.id === postId);

	if (!post) {
		notFound();
	}

	const { title, date, contentHtml } = await getPostData(postId);

	const publishedDate = getFormattedDate(date);
	console.log(contentHtml);

	return (
		<div className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
			<h2 className="text-3xl mt-4 mb-0">{title}</h2>
			<p className="mt-0">{publishedDate}</p>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
				<p>
					<Link href="/">Back to home</Link>
				</p>
			</article>
		</div>
	);
}
export default SinglePost;
