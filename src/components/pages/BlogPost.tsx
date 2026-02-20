import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/content';
import { FadeIn } from '../ui/FadeIn';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Blob } from '../ui/Blob';
import { FloatingOrbs } from '../ui/FloatingOrbs';

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
    <div className="relative overflow-hidden pt-32 pb-20 min-h-screen flex items-center justify-center" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      {/* Background Blobs */}
      <div 
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          overflow: 'hidden'
        }}
      >
        <Blob className="bg-primary/30" style={{ position: 'absolute', top: 0, left: 0, width: '384px', height: '384px' }} />
        <Blob className="bg-accent/30" delay={2} style={{ position: 'absolute', bottom: 0, right: 0, width: '384px', height: '384px' }} />
        <Blob className="bg-purple-500/20" delay={4} style={{ position: 'absolute', top: '50%', left: '50%', width: '256px', height: '256px' }} />
        <FloatingOrbs />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex justify-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors" style={{ marginBottom: '2rem' }}>
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
          
          <GlassCard className="p-0 overflow-hidden">
            <div className="h-64 md:h-96 w-full relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover brightness-75 contrast-125"
              />
              <div className="absolute inset-0 bg-linear-gradient-to-t from-dark via-dark/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-center max-w-2xl px-4 drop-shadow-lg">
                  {post.title}
                </h1>
              </div>
            </div>
            
            <div className="p-8 md:p-12" style={{ padding: '2rem' }}>
              <div className="prose prose-invert prose-lg max-w-none mx-auto">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-200 mb-6 leading-relaxed text-center" style={{ marginBottom: '1.5rem' }}>
                    {paragraph.replace(/\*\*(.*?)\*\*/g, (_match, p1) => `<strong>${p1}</strong>`).split(/<strong>(.*?)<\/strong>/g).map((part, i) => 
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
