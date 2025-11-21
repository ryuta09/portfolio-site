export default async function getArticle() {
	const fetchData = await fetch(
		'https://zenn.dev/api/articles?username=ryuta09',
	)
	const data = await fetchData.json()

	if (!data) {
		throw new Error('Failed to fetch article data')
	}

	return data.articles
}
