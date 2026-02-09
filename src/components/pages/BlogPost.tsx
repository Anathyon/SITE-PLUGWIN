import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/content';
import { FadeIn } from '../ui/FadeIn';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ paddingTop: '5rem' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4" style={{ marginBottom: '1rem' }}>Post não encontrado</h1>
          <Link to="/" className="text-accent hover:text-white transition-colors">Voltar para Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors" style={{ marginBottom: '2rem' }}>
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          
          <GlassCard className="p-0 overflow-hidden">
            <div className="h-64 md:h-96 w-full relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8" style={{ padding: '2rem' }}>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {post.title}
                </h1>
              </div>
            </div>
            
            <div className="p-8 md:p-12" style={{ padding: '2rem' }}>
              <div className="prose prose-invert prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-6 leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                    {paragraph.replace(/\*\*(.*?)\*\*/g, (match, p1) => `<strong>${p1}</strong>`).split(/<strong>(.*?)<\/strong>/g).map((part, i) => 
                      i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                    )}
                  </p>
                ))}
              </div>
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </div>
  );
};
