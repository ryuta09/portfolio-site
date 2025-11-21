export interface Article {
	id: string
	post_type: string
	title: string
	slug: string
	comments_count: number
	liked_count: number
	bookmarked_count: number
	article_type: string
	emoji: string
	is_suspending_private: boolean
	published_at: Date
	body_updated_at: Date
  source_repo_updated_at: Date | null
  pinned: boolean
  path: string
  principal_type: string
  user: {
    id: number
    username: string
    name: string
    avatar_small_url: string
  }
  publication: string
  publication_article_override: string
}
