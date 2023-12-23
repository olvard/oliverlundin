import { posts } from './data.js'

export function load() {
	return {
		summaries: posts?.map((post) => ({
			slug: post.slug,
			title: post.title,
			content: post.content,
			link: post.link,
			image: post.image,
			image2: post.image2,
			image3: post.image3,
			image4: post.image4
		})),
	}
}
