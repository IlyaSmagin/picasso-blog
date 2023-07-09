import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id="error-page"
			className="container flex flex-col items-center justify-center h-full gap-12 p-12 mx-auto"
		>
			<h1 className="text-fuchsia-800 text-3xl font-bold">You have encountered a bug!</h1>
			<p className="text-xl">We are working on it...</p>
			<p className="text-gray-400">
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
