import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';
import { FadeIn } from './ui/FadeIn';
import { GlassCard } from './ui/GlassCard';
import { Contact } from './sections/Contact';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Layout, 
  Users, 
  Heart, 
  Activity, 
  Shield, 
  Clock, 
  FileText, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Vote,
  School,
  BarChart,
  CheckSquare,
  Layers,
  Eye,
  Search,
  Folder,
  Cloud,
  Lock
} from 'lucide-react';

// Icon mapping helper
const IconMap: Record<string, React.ElementType> = {
  Layout, Users, Heart, Activity, Shield, Clock, FileText, Database, 
  Globe, Smartphone, Zap, CheckCircle, Vote, School, BarChart, 
  CheckSquare, Layers, Eye, Search, Folder, Cloud, Lock
};

interface ProjectDetailProps {
  slug?: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link to="/" className="text-accent hover:text-white transition-colors">Voltar para Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" style={{ paddingTop: '96px', paddingBottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center w-full" style={{ paddingLeft: '24px', paddingRight: '24px', marginBottom: '80px' }}>
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-to-l from-primary/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl w-full relative z-10" style={{ marginLeft: 'auto', marginRight: 'auto' }}>


          <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '48px', marginBottom: '80px' }}>
            {/* Hero Text */}
            <FadeIn direction="right">
              {project.logo && (
                <img 
                  src={project.logo} 
                  alt={`${project.title} Logo`} 
                  className="h-16 w-auto mb-6 object-contain"
                />
              )}
              <span className="inline-block bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/20 tracking-wide uppercase" style={{ padding: '6px 16px', marginBottom: '24px' }}>
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" style={{ marginBottom: '24px' }}>
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl" style={{ marginBottom: '32px' }}>
                {project.fullDescription}
              </p>
              <div className="flex flex-wrap" style={{ gap: '16px' }}>
              </div>
            </FadeIn>

            {/* Hero Image */}
            <FadeIn direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>

          {/* Hero Cards Grid */}
          {project.heroCards && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
              {project.heroCards.map((card, index) => {
                const Icon = IconMap[card.icon] || Activity;
                return (
                  <FadeIn key={index} delay={0.1 * index} direction="up">
                    <GlassCard className="h-full hover:bg-white/10 transition-colors border-white/5" style={{ padding: '24px' }}>
                      <div className="bg-accent/10 rounded-lg w-fit" style={{ padding: '12px', marginBottom: '16px' }}>
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ marginBottom: '8px' }}>{card.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </GlassCard>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Detailed Features Section */}
      {project.detailedFeatures && (
        <section className="relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="max-w-7xl w-full" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: '128px' }}>
            {project.detailedFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ gap: '64px' }}>
                <div className="flex-1">
                  <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ marginBottom: '24px' }}>
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed" style={{ marginBottom: '32px' }}>
                      {feature.description}
                    </p>
                    {feature.checkList && feature.checkList.length > 0 && (
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {feature.checkList.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300" style={{ gap: '12px' }}>
                            <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </FadeIn>
                </div>
                <div className="flex-1 w-full">
                  <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                      <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-500" />
                      {feature.image && (
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full aspect-video object-cover"
                        />
                      )}
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {project.structuredBenefits && (
        <section className="bg-black/20 relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="max-w-7xl w-full" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
            <FadeIn className="text-center" style={{ marginBottom: '64px' }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ marginBottom: '24px' }}>
                Benefícios do {project.title} para sua {project.category === 'Saúde' ? 'Clínica' : 'Organização'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Soluções pensadas para escalar seu atendimento e otimizar seus resultados.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px', marginBottom: '80px' }}>
              {project.structuredBenefits.map((benefit, index) => {
                const Icon = IconMap[benefit.icon] || CheckCircle;
                return (
                  <FadeIn key={index} delay={0.05 * index}>
                    <div className="flex rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors group" style={{ gap: '16px', padding: '24px' }}>
                      <div className="mt-1">
                        <div className="rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors" style={{ padding: '8px' }}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white" style={{ marginBottom: '8px' }}>{benefit.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* CTA Banner */}
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-primary/20 to-accent/20 border border-white/10 text-center" style={{ padding: '48px' }}>
                <div className="absolute inset-0 bg-grid-white/5 mask-[linear-gradient(0deg,white,transparent)]" />
                <div className="relative z-10 flex items-center justify-center flex-col">
                  <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '24px' }}>
                    Pronto para modernizar seu atendimento?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto" style={{ marginBottom: '32px' }}>
                    Una-se a dezenas de clínicas que já transformaram sua gestão com o {project.title}.
                  </p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black bg-white text-primary hover:bg-gray-100 rounded-full transition-colors font-bold text-lg"
                    style={{ gap: '8px', padding: '16px 32px' }}
                  >
                    Começar Agora
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <Contact />
    </div>
  );
};
