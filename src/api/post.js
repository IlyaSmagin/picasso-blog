export async function getPost(id = "0") {
	let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
	const response = await fetch(url);
	const post = await response.json();
	return post;
}
