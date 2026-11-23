import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getPublishedPosts } from '../utils/posts';
import { withBase } from '../utils/url';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: new URL(withBase('/'), context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: new URL(withBase(`/blog/${post.id}/`), context.site).toString(),
    })),
    customData: `<language>${SITE.defaultLang}</language>`,
  });
}
