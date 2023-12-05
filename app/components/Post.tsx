import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
	post: BlogPost;
};
function Post({ post }: Props) {
	const { id, title, date } = post;
	const formattedDate = getFormattedDate(date);

	return (
		<li className="mt-4 text-2xl">
			<Link className="underline block" href={`/posts/${id}`}>
				{title}
			</Link>
			<p className="text-sm mt-1">{formattedDate}</p>
		</li>
	);
}
export default Post;
