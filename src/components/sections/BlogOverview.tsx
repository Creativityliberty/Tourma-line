import React from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { blogPosts } from "../../data/blogPosts";
import { ArrowLeftIcon } from "../ui/icons";

export const BlogOverview = () => {
  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              De la confusion <span className="text-brand-purple">à la clarté</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explorez mes articles pour mieux comprendre vos cycles, vos schémas et trouver les réponses qui sommeillent en vous.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.slice(0, 3).map((post) => (
              <div 
                key={post.id} 
                className="group bg-brand-lilas/10 rounded-3xl overflow-hidden border border-brand-lilas/20 hover:shadow-2xl hover:shadow-brand-purple/10 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-brand-purple tracking-widest uppercase">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase tracking-tighter">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-brand-purple rounded-full"></span>
                    <span>{post.readTime} de lecture</span>
                    <span className="w-1 h-1 bg-brand-purple rounded-full"></span>
                    <span>{post.persona}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-brand-dark mb-4 group-hover:text-brand-purple transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-purple font-bold hover:gap-4 transition-all duration-300 group/link"
                  >
                    <span>Continuer la lecture</span>
                    <span className="transform rotate-180"><ArrowLeftIcon className="w-4 h-4" /></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link 
              to="/blog"
              className="inline-flex items-center gap-2 bg-brand-purple text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-purple/20"
             >
               Explorer tous les articles
               <span className="transform rotate-180"><ArrowLeftIcon className="w-4 h-4" /></span>
             </Link>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
