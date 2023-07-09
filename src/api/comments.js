export async function getComments(postId = "0") {
	let url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
	const response = await fetch(url);
	const comments = await response.json();
	return comments;
}
