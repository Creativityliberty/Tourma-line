import fm from "front-matter";

// Définition de la structure d'un article de blog
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Le corps de l'article en Markdown
  image: string;
  date: string;
  readTime: string;
  category: string;
  persona: string;
  featured?: boolean;
}

// Vite permet de charger automatiquement tous les fichiers Markdown du dossier
// avec l'option eager: true pour les avoir de suite à l'exécution.
const rawPosts = import.meta.glob('../../blog_markdowns/*.md', { query: '?raw', import: 'default', eager: true });

export const blogPosts: BlogPost[] = Object.keys(rawPosts)
  // Filtrer les fichiers de gestion interne (comme BLOG_PLAN ou PROGRAMME) pour ne pas les publier
  .filter((path) => !path.includes('PLAN') && !path.includes('PROGRAMME'))
  .map((path, index) => {
    const fileContent = rawPosts[path] as string;
    
    // Extraction des métadonnées (YAML frontmatter) et du corps du texte Markdown
    const { attributes, body } = fm<any>(fileContent);
    
    return {
      id: String(index),
      slug: attributes.slug || path.replace('../../blog_markdowns/', '').replace('.md', ''),
      title: attributes.title || "Titre Provisoire",
      excerpt: attributes.description || "",
      content: body,
      image: attributes.image || "/blog-chemin-devie.png",
      date: attributes.date || new Date().toISOString().split('T')[0],
      readTime: attributes.readTime || "5 min",
      category: attributes.category || "Général",
      persona: attributes.persona || "",
      featured: attributes.featured || false,
    };
  })
  // Trier les articles du plus récent au plus ancien
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
