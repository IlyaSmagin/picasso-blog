import { Form } from "react-router-dom";
export async function commentsAction({ request, params }) {
	const formData = await request.formData();
	console.log(formData, params);
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
		{
			method: "POST",
			body: JSON.stringify({
				postId: params.postId,
				id: 134,
				name: formData.get("name"),
				email: formData.get("name") + "@gmail.com",
				body: formData.get("body"),
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		}
	);
	const res = await response.json();
	console.log("Comment send:",res);
	return res;
}

export default function CommentSection({ comments }) {
	return (
		<div>
			<h2 className="mt-14 p-4 pl-0 -ml-2 text-2xl font-bold">
				Comment section
			</h2>
			<ul className="border-fuchsia-800 relative border-l">
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						name={comment.name}
						email={comment.email}
						body={comment.body}
					/>
				))}
			</ul>
			<div>
				<Form method="post">
					<div className="sm:grid-cols-2 grid gap-6 mb-8">
						<div className="relative z-0">
							<input
								type="text"
								name="name"
								className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-fuchsia-600 focus:outline-none focus:ring-0"
								placeholder=" "
								required
							/>
							<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500">
								Your name
							</label>
						</div>
						<div className="relative z-0 col-span-2">
							<textarea
								name="body"
								rows="1"
								className="peer block w-11/12 appearance-none border-0 border-b border-gray-700 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-fuchsia-600 focus:outline-none focus:ring-0"
								placeholder=" "
								required
							></textarea>
							<label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500">
								Your message
							</label>
						</div>
						<button
							className="bg-fuchsia-700 px-2.5 py-1.5 text-white rounded"
							type="submit"
						>
							Send comment
						</button>
					</div>
				</Form>
			</div>
		</div>
	);
}

function Comment({ name, email, body }) {
	return (
		<li className="mx-4 mb-10">
			<div className="absolute w-3 h-3 bg-fuchsia-900 rounded-full mt-1.5 -left-1.5 border border-fuchsia-900"></div>
			<div className=" line-clamp-1 mb-1 text-sm font-normal leading-normal">
				{name} <span className="text-gray-600">{email}</span>
			</div>
			<p className="mb-4 text-sm font-normal text-gray-700">{body}</p>
		</li>
	);
}
