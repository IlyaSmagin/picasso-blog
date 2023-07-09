export async function getPosts(filterId = "0") {
	let url = "https://jsonplaceholder.typicode.com/posts";
	if (filterId != "0") {
		url += `?userId=${filterId}`;
	}
	const response = await fetch(url);
	const posts = await response.json();
	return posts;
}
