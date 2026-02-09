import { motion } from 'framer-motion';
import { Blob } from '../ui/Blob';
import { FloatingOrbs } from '../ui/FloatingOrbs';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Hero = () => {
  return (
    <section 
      className={cn("relative overflow-hidden")} 
      style={{ 
        paddingTop: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
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

      <div 
        className={cn("relative z-10 w-full")} 
        style={{ 
          paddingLeft: '24px', 
          paddingRight: '24px', 
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <h2 className="font-medium uppercase" style={{ 
            fontSize: '14px', 
            letterSpacing: '0.2em', 
            color: '#a78bfa', 
            marginBottom: '16px',
            fontFamily: 'Inter, sans-serif'
          }}>
            Inovação & Tecnologia
          </h2>
          
          <h1 className="font-bold leading-tight" style={{ 
            marginBottom: '24px',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <span className="block text-white" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
              Transformando Ideias em
            </span>
            <span className="block" style={{ 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              color: '#6D28D9',
              background: 'linear-gradient(to right, #7c3aed, #4c1d95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginTop: '4px'
            }}>
              Soluções Digitais
            </span>
          </h1>

          <p style={{ 
            fontSize: '18px', 
            lineHeight: '1.6', 
            color: '#cbd5e1', 
            marginBottom: '40px',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '672px', // max-w-2xl
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            A PlugWin impulsiona projetos de automação e desenvolvimento de sistemas,
            entregando soluções inovadoras e inteligentes para o seu negócio.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center" style={{ gap: '16px' }}>
            <a
              href="#contact"
              className="text-white rounded-full font-semibold transition-all shadow-lg flex items-center group"
              style={{ 
                padding: '16px 32px', 
                gap: '8px',
                backgroundColor: '#5b21b6', // Darker purple
                boxShadow: '0 4px 14px 0 rgba(91, 33, 182, 0.39)',
              }}
            >
              Começar Projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="text-white rounded-full font-semibold transition-all backdrop-blur-md"
              style={{ 
                padding: '16px 32px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              Nossos Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
