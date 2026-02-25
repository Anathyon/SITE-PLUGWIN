import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/content';
import { FadeIn } from '../ui/FadeIn';
import { ArrowLeft } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

/**
 * Componente para exibição de uma postagem individual do blog.
 * Busca o post com base no ID fornecido na URL e renderiza seu conteúdo.
 * 
 * @returns {JSX.Element} O componente BlogPost renderizado.
 */
export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  // Renderização de estado não encontrado
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20" style={{ paddingTop: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center" style={{ textAlign: 'center' }}>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ marginBottom: '1rem' }}>Post não encontrado</h1>
          <Link to="/" className="text-accent hover:text-white transition-colors">Voltar para Home</Link>
        </div>
      </div>
    );
  }

  /**
   * Renderiza o conteúdo do post, processando negritos e parágrafos.
   * @param {string} content O conteúdo bruto do post.
   */
  const renderContent = (content: string) => {
    return content.split(/\n\s*\n/).map((paragraph, index) => (
      <p key={index} className="text-gray-200 mb-6 leading-relaxed text-left" style={{ marginBottom: '1.5rem', textAlign: 'left', lineHeight: '1.625' }}>
        {paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const text = part.slice(2, -2);
            return <strong key={i} className="text-white font-semibold">{text}</strong>;
          }
          return part;
        })}
      </p>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0f0c29]" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="max-w-4xl w-full mx-auto px-6" style={{ maxWidth: '56rem', width: '100%', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <FadeIn>
          <div className="flex justify-start mb-6" style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Início
            </Link>
          </div>
          
          <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Imagem como faixa decorativa reduzida */}
            <div className="h-32 md:h-48 w-full rounded-2xl overflow-hidden relative mb-8 shadow-2xl" style={{ width: '100%', borderRadius: '1rem', overflow: 'hidden', position: 'relative', marginBottom: '2rem' }}>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover brightness-90 transition-transform duration-700 hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f0c29]/60 to-transparent" style={{ position: 'absolute', inset: 0 }} />
            </div>
            
            {/* Título fora da imagem, com destaque total e garantindo visibilidade */}
            <div className="px-2 mb-10 text-center md:text-left" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', marginBottom: '2.5rem' }}>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-sm">
                {post.title}
              </h1>
              <div className="h-1.5 w-20 bg-accent mt-6 rounded-full mx-auto md:mx-0" style={{ height: '0.375rem', width: '5rem', marginTop: '1.5rem', borderRadius: '9999px' }} />
            </div>

            {/* Conteúdo com Glassmorphism e espaçamento garantido */}
            <GlassCard className="p-8 md:p-12 border border-white/10 shadow-xl overflow-visible" style={{ padding: '2.5rem' }}>
              <div className="prose prose-invert prose-lg max-w-none mx-auto" style={{ maxWidth: 'none', marginLeft: 'auto', marginRight: 'auto' }}>
                {renderContent(post.content)}
              </div>
            </GlassCard>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
