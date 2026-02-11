import { GlassCard } from '../ui/GlassCard';
import { ExternalLink } from 'lucide-react';
import { Carousel } from '../ui/Carousel';
import { projects } from '../../data/content';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useState, useEffect } from 'react';
import type { Project } from '../../types/content';

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ProjectCard = ({ project }: { project: Project }) => (
    <Link 
      to={`/project/${project.slug}`} 
      style={{ display: 'block', height: '100%', textDecoration: 'none' }}
    >
      <GlassCard 
        className="group hover:scale-105 transition-all duration-300"
        style={{ 
          padding: 0, 
          border: 'none', 
          height: '100%', 
          overflow: 'hidden'
        }}
      >
        <div 
          className="relative overflow-hidden"
          style={{ height: '256px' }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ 
              background: 'linear-gradient(to top, rgba(15, 16, 22, 0.9), transparent)',
              display: 'flex',
              alignItems: 'end',
              padding: '24px'
            }}
          >
            <span style={{ color: '#9F7AEA', fontWeight: 500 }}>{project.category}</span>
          </div>
        </div>
        <div 
          className="backdrop-blur-md border-t border-white/10"
          style={{ 
            padding: '24px', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}
        >
          <h3 
            className="font-bold text-white" 
            style={{ 
              fontSize: '1.5rem', 
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'between',
              gap: '8px'
            }}
          >
            <span style={{ flex: 1 }}>{project.title}</span>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </h3>
          <p 
            className="text-gray-400" 
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
          >
            {project.description}
          </p>
        </div>
      </GlassCard>
    </Link>
  );

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
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
            Projetos em Destaque
          </h2>
          <p 
            className="text-gray-400" 
            style={{ maxWidth: '672px', margin: '0 auto', fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: '0 16px' }}
          >
            Conheça alguns dos nossos casos de sucesso e desenvolvimentos recentes.
          </p>
        </div>

        {isMobile ? (
          <Carousel showDots showArrows autoPlay interval={5000}>
            {projects.map((project, index) => (
              <div key={index} style={{ padding: '0 16px' }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel showDots showArrows autoPlay interval={5000}>
            {projects.reduce((acc: any[], project, index) => {
              const pairIndex = Math.floor(index / 2);
              if (!acc[pairIndex]) acc[pairIndex] = [];
              acc[pairIndex].push(project);
              return acc;
            }, []).map((pair: typeof projects, pairIndex: number) => (
              <div key={pairIndex} className={cn("grid grid-cols-2")} style={{ gap: '32px', padding: '0 16px' }}>
                {pair.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};
