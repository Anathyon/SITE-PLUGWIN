import { GlassCard } from '../ui/GlassCard';
import { Code, Cloud, Smartphone, Layout, ShoppingCart, Settings, Cpu, Network } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { Carousel } from '../ui/Carousel';
import { cn } from '../../utils/cn';
import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { Service } from '../../types/content';

const services: Service[] = [
  {
    icon: <Code style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Desenvolvimento de Sistemas",
    description: "Desenvolvemos sistemas sob medida pensando no processo e modelo de negócio da sua empresa, focando sempre na otimização e aumento da produtividade."
  },
  {
    icon: <Settings style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Mapeamento de Processos",
    description: "O mapeamento de processos de negócios objetiva determinar a forma em que os insumos recebidos de um fornecedor, são tratados e transformados em produtos."
  },
  {
    icon: <Smartphone style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Desenvolvimento de Aplicativos",
    description: "Especialistas em desenvolvimento de aplicativos, plataformas web e transformação digital! Cuidamos do seu projeto da idealização até a parte prática e sustentação."
  },
  {
    icon: <Layout style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Criação de Sites",
    description: "Equipe especializada com o melhor custo beneficio do mercado. Criamos e configuramos seu site para que ele fique incrível com as melhores ferramentas."
  },
  {
    icon: <ShoppingCart style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Criação de Lojas Virtuais",
    description: "Mais do que nunca o seu negócio precisa de um site para sobreviver, aposte na internet. Sites profissionais e responsivos."
  },
  {
    icon: <Cloud style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Cloud Computing",
    description: "Gestão contínua dos ambientes em cloud, garantindo um ambiente moderno, de alta performance, otimizado e uma gestão eficiente dos custos."
  },
  {
    icon: <Cpu style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Automação e Transformação Digital",
    description: "Aprimoramos processos empresariais por meio da automação e digitalização, reduzindo custos, aumentando a eficiência e impulsionando a inovação."
  },
  {
    icon: <Network style={{ width: '32px', height: '32px', color: '#9F7AEA' }} />,
    title: "Integração de Sistemas",
    description: "Conectamos diferentes plataformas e ferramentas para garantir um fluxo de trabalho unificado, melhorando a comunicação, a segurança e a produtividade."
  }
];

export const Services = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => (
    <GlassCard 
      className="flex flex-col items-start hover:bg-white/10 transition-all duration-300 hover:scale-105"
      style={{ 
        height: '100%', 
        padding: '32px',
        gap: '16px',
        minHeight: '280px'
      }}
    >
      <div 
        className="rounded-xl border border-white/10"
        style={{ 
          padding: '12px', 
          backgroundColor: 'rgba(159, 122, 234, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {service.icon}
      </div>
      <h3 
        className="font-bold text-white" 
        style={{ fontSize: '1.125rem' }}
      >
        {service.title}
      </h3>
      <p 
        className="text-gray-400" 
        style={{ fontSize: '0.875rem', lineHeight: '1.6' }}
      >
        {service.description}
      </p>
    </GlassCard>
  );

  return (
    <section id="services" style={{ padding: '80px 0', position: 'relative' }}>
      <div 
        className={cn("w-full")} 
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}
      >
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 
            className="font-bold text-white" 
            style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', marginBottom: '16px' }}
          >
            Nossos Serviços
          </h2>
          <p 
            className="text-gray-400" 
            style={{ maxWidth: '672px', margin: '0 auto', fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: '0 16px' }}
          >
            Soluções completas para impulsionar a transformação digital da sua empresa.
          </p>
        </div>

        {isMobile ? (
          <Carousel showDots showArrows autoPlay interval={5000}>
            {services.map((service, index) => (
              <div key={index} style={{ padding: '0 16px' }}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div 
            className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4")} 
            style={{ gap: '24px' }}
          >
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <ServiceCard service={service} index={index} />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
