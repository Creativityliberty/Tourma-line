import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeftIcon, SparklesIcon } from "../components/ui/icons";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";

export const BlogListPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["Tous", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === "Tous" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      navigate(`/${href}`);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Blog Officiel — Tourma-Line | Numérologie & Clarté</title>
        <meta name="description" content="Découvrez tous nos articles sur la numérologie, la guidance et le bien-être spirituel. Trouvez les réponses à vos questions et explorez vos cycles de vie." />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header section */}
            <div className="text-center mb-16">
              <AnimateOnScroll>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">
                  Le Blog de la <span className="text-brand-purple italic">Clarté</span>
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light">
                  Articles, guides et réflexions pour naviguer dans vos cycles de vie avec sérénité.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === cat 
                    ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/20" 
                    : "bg-brand-lilas/10 text-brand-dark hover:bg-brand-lilas/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <AnimateOnScroll key={post.id}>
                  <div className="group bg-brand-lilas/5 rounded-[2.5rem] overflow-hidden border border-brand-lilas/10 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-500 flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold text-brand-purple tracking-widest uppercase">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 bg-brand-purple/30 rounded-full"></span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h2 className="text-xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-purple transition-colors leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-brand-purple font-bold text-sm tracking-wide group/link"
                      >
                        <span>Lire l'article</span>
                        <span className="transform rotate-180 transition-transform group-hover/link:translate-x-1"><ArrowLeftIcon className="w-4 h-4" /></span>
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-24">
                <SparklesIcon className="w-12 h-12 text-brand-lilas mx-auto mb-6 opacity-50" />
                <p className="text-gray-400">Aucun article trouvé dans cette catégorie pour le moment.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
