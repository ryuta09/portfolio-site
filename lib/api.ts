export async function getArticle() {
  const fetchData = await fetch(
    'https://zenn.dev/api/articles?username=ryuta09'
  )
  const data = await fetchData.json()

  if (!data) {
    throw new Error('Failed to fetch article data')
  }

  return data.articles
}
export async function getArticleThreeData() {
  const fetchData = await fetch(
    'https://zenn.dev/api/articles?username=ryuta09'
  )
  const data = await fetchData.json()
  const threeData = data.articles.slice(0, 3)

  if (!data) {
    throw new Error('Failed to fetch article data')
  }

  return threeData
}
