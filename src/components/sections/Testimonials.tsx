import { GlassCard } from '../ui/GlassCard';
import { FadeIn } from '../ui/FadeIn';
import { testimonials } from '../../data/content';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative flex justify-center" style={{ padding: '5rem 0', width: '100dvw' }}>
      <div className="w-[80dvw]" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '1rem' }}>
            Parceria e Confiança
          </h2>
          <p className="text-gray-400 mx-auto">
            O que nossos clientes dizem sobre nós.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex flex-col items-center text-center" style={{ padding: '1.5rem' }}>
                  <div className="flex flex-col items-center" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex justify-center text-accent">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-white/10" />
                  </div>
                  <p className="text-gray-300 italic leading-relaxed text-center">
                    "{testimonial.text}"
                  </p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
