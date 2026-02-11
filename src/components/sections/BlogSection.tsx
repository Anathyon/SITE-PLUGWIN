import { GlassCard } from '../ui/GlassCard';
import { FadeIn } from '../ui/FadeIn';
import { blogPosts } from '../../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative" style={{ marginTop: '0', marginBottom: '0' }}>
      <div 
        className="w-full" 
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: 'clamp(32px, 5vw, 40px) 24px' 
        }}
      >
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 
            className="font-bold text-white" 
            style={{ 
              fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', 
              marginBottom: '16px' 
            }}
          >
            Blog
          </h2>
          <p 
            className="text-gray-400" 
            style={{ 
              maxWidth: '672px', 
              margin: '0 auto',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              padding: '0 16px'
            }}
          >
            Fique informado com nossos últimos artigos e novidades.
          </p>
        </div>

        <div 
          className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3")} 
          style={{ gap: '24px' }}
        >
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <GlassCard 
                className="flex flex-col h-full p-0 overflow-hidden group border-0 hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ backgroundColor: 'rgba(109, 40, 217, 0.2)' }}
                  />
                </div>
                <div 
                  className="flex flex-col grow backdrop-blur-md border-t border-white/10" 
                  style={{ 
                    padding: '24px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <h3 
                    className="font-bold text-white mb-3 line-clamp-2 group-hover:text-[#9F7AEA] transition-colors" 
                    style={{ fontSize: '1.25rem', marginBottom: '12px' }}
                  >
                    {post.title}
                  </h3>
                  <p 
                    className="text-gray-400 mb-6 line-clamp-3 grow" 
                    style={{ 
                      fontSize: '0.875rem', 
                      marginBottom: '24px',
                      lineHeight: '1.6'
                    }}
                  >
                    {post.content.substring(0, 150)}...
                  </p>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 font-medium transition-colors mt-auto"
                    style={{ 
                      color: '#9F7AEA',
                      alignSelf: 'flex-start'
                    }}
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
