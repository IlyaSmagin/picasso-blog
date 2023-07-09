import {
	Outlet,
	Link,
	useLoaderData,
	Form,
	redirect,
	useSubmit,
} from "react-router-dom";
import { getUsers } from "../api/users";

export async function usersLoader({ request }) {
	const url = new URL(request.url);
	const userId = url.searchParams.get("userId") || "0";
	const users = await getUsers();
	return { users, userId };
}
export async function action({ request }) {
	const formData = await request.formData();
	const filterId = formData.get("userId");
	if (filterId === "0") {
		return redirect("./posts");
	} else {
		return redirect(`posts/?userId=${filterId}`);
	}
}

export default function Root() {
	const { users, userId } = useLoaderData();

	const submit = useSubmit();

	return (
		<>
			<header className="flex flex-row justify-between p-4">
				<Link
					to="./posts"
					className="text-fuchsia-700 text-3xl font-bold"
				>
					Picasso blog
				</Link>
				<Form
					method="post"
					name="user"
					className="w-fit flex flex-row items-baseline mr-8"
				>
					<label
						htmlFor="userSelect"
						className="min-w-fit mb-2 mr-1 text-sm"
					>
						Posts by
					</label>
					<select
						onChange={(e) => submit(e.currentTarget.form)}
						id="userSelect"
						name="userId"
						value={userId}
						className="block pt-2.5 w-full min-w-fit text-sm bg-transparent border-0 border-b-[1px] border-fuchsia-800 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer"
					>
						<option value="0">all users</option>
						{users.map((user) => (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						))}
					</select>
				</Form>
			</header>
			<Outlet />
		</>
	);
}
