export async function getUser(id = 0) {
	let url = `https://jsonplaceholder.typicode.com/users/${id}`;
	const response = await fetch(url);
	const user = await response.json();
	return user;
}
