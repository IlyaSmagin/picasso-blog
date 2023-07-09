export async function getUsers() {
	let url = `https://jsonplaceholder.typicode.com/users`;
	const response = await fetch(url);
	const users = await response.json();
	const filteredUsers = users.map((user) => ({
		id: user.id,
		name: user.name,
	}));
	return filteredUsers;
}
