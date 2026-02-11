import { GlassCard } from '../ui/GlassCard';
import { FadeIn } from '../ui/FadeIn';
import { testimonials } from '../../data/content';
import { Quote, Star } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative flex justify-center" style={{ padding: '80px 0', width: '100%' }}>
      <div 
        className="w-full" 
        style={{ 
          maxWidth: '1280px',
          padding: '0 24px'
        }}
      >
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 
            className="font-bold text-white" 
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', marginBottom: '16px' }}
          >
            Parceria e Confiança
          </h2>
          <p 
            className="text-gray-400" 
            style={{ maxWidth: '672px', margin: '0 auto', fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: '0 16px' }}
          >
            O que nossos clientes dizem sobre nós.
          </p>
        </div>

        <div 
          className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3")} 
          style={{ gap: '24px' }}
        >
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard 
                className="h-full flex flex-col hover:scale-105 transition-all duration-300"
                style={{ 
                  padding: '32px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                }}
              >
                <div className="flex items-start" style={{ gap: '16px', marginBottom: '20px' }}>
                  <div 
                    className="rounded-full overflow-hidden border-2 flex-shrink-0"
                    style={{ 
                      width: '56px', 
                      height: '56px',
                      borderColor: '#6D28D9'
                    }}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-white font-bold" 
                      style={{ fontSize: '1.125rem', marginBottom: '4px' }}
                    >
                      {testimonial.name}
                    </h4>
                    <div className="flex" style={{ gap: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4" 
                          style={{ fill: '#FFA500', color: '#FFA500' }}
                        />
                      ))}
                    </div>
                  </div>
                  <Quote 
                    className="flex-shrink-0" 
                    style={{ width: '32px', height: '32px', color: 'rgba(109, 40, 217, 0.3)' }}
                  />
                </div>
                <p 
                  className="text-gray-300 italic leading-relaxed flex-1"
                  style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}
                >
                  "{testimonial.text}"
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
