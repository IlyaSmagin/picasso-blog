import { useLoaderData, Link } from "react-router-dom";
import { getPost } from "../api/post";
import { getUser } from "../api/user";
import { getComments } from "../api/comments";
import CommentSection from "../components/CommentSection";

export async function postLoader({ params }) {
	const post = await getPost(params.postId.toString());
	const user = await getUser(post.userId);
	const comments = await getComments(post.id);
	return { post, user, comments };
}

export default function Post() {
	const { post, user, comments } = useLoaderData();
	return (
		<>
			<main className=" md:flex-row flex flex-col">
				<article className="md:w-2/3 w-11/12 px-8">
					<h1 className="pt-16 pb-10 text-5xl font-bold">
						{post.title}
					</h1>

					<Link to={`../?userId=${user.id}`}>
						Post by {user.name}{" "}
						<span className="text-gray-600">@{user.username}</span>
					</Link>
					<div className="pb-8">E-mail: {user.email}</div>

					<p className="first-letter:text-3xl first-letter:font-bold mb-3 text-lg">
						{post.body}
					</p>
					<p className="mb-3 text-lg">{post.body}</p>
					<p className="mb-3 text-lg">{post.body}</p>
					<p className="mb-3 text-lg">{post.body}</p>
				</article>
				<aside className="md:w-1/3 w-11/12 mx-auto">
					<CommentSection comments={comments} />
				</aside>
			</main>
		</>
	);
}
