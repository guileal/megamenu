async function requestCategoriesMegamenu() {
	const response = await fetch(
		"https://devscripta.com.br/wp-json/wp/v2/category-mega-menu",
		{
			mode: "cors",
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		}
	);

	const body = await response.json();
	return body;
}

