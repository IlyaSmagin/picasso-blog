import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts";

export async function postsLoader({ request }) {
	const url = new URL(request.url);
	const filteredByUserId = url.searchParams.get("userId") || "0";
	const posts = await getPosts(filteredByUserId);
	return { posts };
}
export default function PostFeed() {
	const { posts } = useLoaderData();

	if (posts.length) {
		return (
			<ul className="md:grid-cols-3 sm:grid-cols-2 container grid grid-cols-1 mx-auto">
				{posts.map((post) => (
					<li className="p-4 mb-6" key={post.id}>
						<Link to={`${post.id}`}>
							<h3 className="text-lg font-bold">{post.title}</h3>
							<p className="line-clamp-2">{post.body}</p>
						</Link>
					</li>
				))}
			</ul>
		);
	} else {
		return (
			<p>
				<i>No posts</i>
			</p>
		);
	}
}
