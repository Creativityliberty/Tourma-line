import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeftIcon, WhatsAppIcon, SparklesIcon, CalendarIcon } from "../components/ui/icons";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Scroll to section logic if needed
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-lilas/10 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-display font-bold text-brand-dark mb-4">Article introuvable</h1>
        <p className="text-gray-600 mb-8">Cet article n'existe plus ou a été déplacé.</p>
        <Link to="/" className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg">
           Retour à l'accueil
        </Link>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "image": `https://tourma-line.fr${post.image}`,
    "author": {
      "@type": "Person",
      "name": "Line",
      "url": "https://tourma-line.fr/#a-propos",
      "jobTitle": "Numérologue & Cartomancienne",
      "knowsAbout": ["Numérologie", "Cartomancie", "Soins Énergétiques", "Lahochi"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tourma-Line",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tourma-line.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tourma-line.fr/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>{post.title} — Blog Tourma-Line</title>
        <meta name="description" content={post.excerpt} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://tourma-line.fr/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <Header onNavClick={handleNavClick} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-12 flex items-center gap-2 text-sm text-gray-400 font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-brand-purple transition-colors">Accueil</Link>
              <span className="opacity-30">/</span>
              <span className="text-brand-purple">{post.category}</span>
            </nav>

            {/* Header Content */}
            <header className="mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-dark leading-tight mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-bold uppercase tracking-tight">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center">
                     <SparklesIcon className="w-5 h-5 text-brand-purple" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-brand-purple">Par Line</span>
                     <span className="text-[10px] opacity-60">Numérologue experte</span>
                   </div>
                 </div>
                 <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                 <div className="flex flex-col">
                   <span>Publié le</span>
                   <span className="text-brand-dark">{post.date}</span>
                 </div>
                 <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                 <div className="flex flex-col">
                   <span>Temps de lecture</span>
                   <span className="text-brand-dark">{post.readTime}</span>
                 </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-brand-purple/10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Body */}
            <article 
              className="prose prose-lg sm:prose-xl prose-brand max-w-none mb-24 text-gray-700 font-light leading-relaxed first-letter:text-7xl first-letter:font-display first-letter:font-bold first-letter:text-brand-purple first-letter:mr-3 first-letter:float-left prose-headings:font-display prose-headings:text-brand-dark prose-headings:font-bold prose-strong:text-brand-dark"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Final CTA Action (Requested) */}
            <AnimateOnScroll>
              <div className="bg-brand-dark rounded-[3rem] p-10 sm:p-16 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-[100px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 blur-[100px] -ml-32 -mb-32"></div>
                
                <p className="inline-block px-4 py-1 rounded-full bg-brand-purple/30 text-brand-lilas text-xs font-bold uppercase tracking-widest mb-6">
                   Prête pour la clarté ?
                </p>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                  De la confusion à la clarté, <br className="hidden sm:block" />
                  <span className="text-brand-lilas italic">il n'y a qu'un pas.</span>
                </h2>
                
                <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Qu'il s'agisse d'un bilan de vie complet ou d'une guidance ciblée, je vous accompagne avec expertise et bienveillance pour éclairer votre chemin.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="https://cal.com/line-simon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-brand-lilas text-brand-dark px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-3 hover:bg-white"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    <span>Réserver ma consultation</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/33649653186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500/10 border border-green-500/30 text-green-500 px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-green-500 hover:text-white flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Contact WhatsApp</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Back to Blog Button */}
            <div className="mt-16 text-center">
               <Link 
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-purple transition-all font-bold uppercase tracking-widest text-sm"
               >
                 <ArrowLeftIcon className="w-4 h-4" />
                 <span>Retour à l'accueil / Blog</span>
               </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
