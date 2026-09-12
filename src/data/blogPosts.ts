import fm from "front-matter";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  updated?: string;
  author: string;
  readTime: string;
  category: string;
  persona: string;
  featured?: boolean;
}

const rawPosts = import.meta.glob('../../blog_markdowns/*.md', { query: '?raw', import: 'default', eager: true });

const hiddenBlogSlugs = new Set([
  "choisir-voyante-cartomancienne-serieuse",
  "guidance-cartomancie-telephone-efficacite",
]);

export const blogPosts: BlogPost[] = Object.keys(rawPosts)
  .filter((path) => !path.includes('PLAN') && !path.includes('PROGRAMME'))
  .map((path, index) => {
    const fileContent = rawPosts[path] as string;
    const { attributes, body } = fm<any>(fileContent);

    return {
      id: String(index),
      slug: attributes.slug || path.replace('../../blog_markdowns/', '').replace('.md', ''),
      title: attributes.title || "Titre Provisoire",
      seoTitle: attributes.seoTitle || undefined,
      excerpt: attributes.description || "",
      content: body,
      image: attributes.image || "/blog-chemin-devie.png",
      date: attributes.date || new Date().toISOString().split('T')[0],
      updated: attributes.updated || undefined,
      author: "Line",
      readTime: attributes.readTime || "5 min",
      category: attributes.category || "Général",
      persona: attributes.persona || "",
      featured: attributes.featured || false,
    };
  })
  .filter((post) => !hiddenBlogSlugs.has(post.slug))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
