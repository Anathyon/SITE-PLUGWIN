import { FadeIn } from '../ui/FadeIn';
import { GlassCard } from '../ui/GlassCard';
import { cn } from '../../utils/cn';

export const About = () => {
  return (
    <section id="about" className="relative" style={{ padding: '80px 0' }}>
      <div 
        className={cn("w-full")} 
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}
      >
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 items-center")} style={{ gap: '48px' }}>
          <FadeIn direction="right">
            <h2 
              className="font-bold text-white" 
              style={{ fontSize: '30px', marginBottom: '24px' }}
            >
              Sobre Nós
            </h2>
            <div 
              className="text-gray-300" 
              style={{ 
                fontSize: '18px', 
                lineHeight: '1.6',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <p>
                A <span style={{ color: '#9F7AEA', fontWeight: 600 }}>PlugWin</span> surge com a missão de impulsionar projetos de automação e desenvolvimento de sistemas para o mercado.
              </p>
              <p>
                Com a ampla experiência de seus sócios em diversos projetos, a empresa entrega soluções inovadoras e inteligentes no setor digital.
              </p>
              <p>
                Nossa prioridade é oferecer um atendimento personalizado e sob medida para cada cliente, garantindo qualidade, agilidade, menos burocracia e mais objetividade.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <GlassCard 
              className="relative overflow-hidden group"
              style={{ padding: 0 }}
            >
              <div 
                className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity" 
                style={{
                  background: 'linear-gradient(to bottom right, rgba(110, 31, 255, 0.2), rgba(167, 139, 250, 0.2))'
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe PlugWin" 
                className="w-full h-full object-cover rounded-lg relative z-10 mix-blend-overlay"
                style={{ display: 'block' }}
              />
              <div 
                className="relative z-20 text-center" 
                style={{ padding: '24px' }}
              >
                <h3 
                  className="font-bold text-white" 
                  style={{ fontSize: '24px', marginBottom: '8px' }}
                >
                  Inovação & Tecnologia
                </h3>
                <p className="text-gray-200" style={{ fontSize: '16px' }}>
                  Transformando desafios em soluções digitais.
                </p>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
