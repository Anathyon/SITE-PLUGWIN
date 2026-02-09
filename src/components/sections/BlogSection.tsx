import { GlassCard } from '../ui/GlassCard';
import { FadeIn } from '../ui/FadeIn';
import { blogPosts } from '../../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative" style={{ marginTop: '0', marginBottom: '0' }}>
      <div className="w-full" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px' }}>
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center" style={{ marginBottom: '1rem' }}>Blog</h2>
          <p className="text-gray-400 text-center" style={{ maxWidth: '672px', margin: '0 auto' }}>
            Fique informado com nossos últimos artigos e novidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mx-auto" style={{ gap: '2rem', maxWidth: '100%' }}>
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <GlassCard className="flex flex-col h-full p-0 overflow-hidden group border-0 w-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col grow bg-white/5 backdrop-blur-md border-t border-white/10" style={{ padding: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent transition-colors" style={{ marginBottom: '0.75rem', textAlign: 'center', width: '100%' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3 grow text-sm" style={{ marginBottom: '1.5rem', textAlign: 'center', width: '100%' }}>
                    {post.content.substring(0, 150)}...
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors mt-auto"
                    style={{ justifyContent: 'center' }}
                  >
                    Saiba Mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
