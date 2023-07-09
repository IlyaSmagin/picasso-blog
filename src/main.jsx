import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { action as rootAction, usersLoader } from "./routes/root";
import PostFeed, { postsLoader } from "./components/PostFeed";
import ErrorPage from "./routes/error-page.jsx";
import Post, { postLoader } from "./routes/post";
import { commentsAction } from "./components/CommentSection";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "picasso-blog/posts",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: usersLoader,
		action: rootAction,
		children: [
			{
				index: true,
				element: <PostFeed />,
				loader: postsLoader,
			},
			{
				path: ":postId",
				element: <Post />,
				action: commentsAction,
				loader: postLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
