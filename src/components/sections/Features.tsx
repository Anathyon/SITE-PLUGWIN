import { FadeIn } from '../ui/FadeIn';
import { Users, Zap, ShieldCheck, CloudLightning } from 'lucide-react';

const features = [
  {
    icon: <Users style={{ width: '24px', height: '24px', color: '#9F7AEA' }} />,
    title: "Equipe Full-stack",
    description: "Profissionais especializados em todas as camadas do desenvolvimento."
  },
  {
    icon: <Zap style={{ width: '24px', height: '24px', color: '#9F7AEA' }} />,
    title: "Metodologia Ágil",
    description: "Entregas rápidas e eficientes com adaptação contínua."
  },
  {
    icon: <ShieldCheck style={{ width: '24px', height: '24px', color: '#9F7AEA' }} />,
    title: "Código de Alta Qualidade",
    description: "Padrões rigorosos garantindo desempenho e segurança."
  },
  {
    icon: <CloudLightning style={{ width: '24px', height: '24px', color: '#9F7AEA' }} />,
    title: "Cloud Security",
    description: "Estratégias avançadas de proteção de dados em nuvem."
  }
];

export const Features = () => {
  return (
    <section 
      className="border-y border-white/5 backdrop-blur-sm"
      style={{ 
        padding: '40px 0', 
        backgroundColor: 'rgba(255, 255, 255, 0.05)' 
      }}
    >
      <div 
        className="w-full" 
        style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 24px' 
        }}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
          style={{ gap: '32px' }}
        >
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div 
                className="flex items-center" 
                style={{ gap: '16px' }}
              >
                <div 
                  className="rounded-lg flex items-center justify-center" 
                  style={{ 
                    padding: '8px', 
                    backgroundColor: 'rgba(110, 31, 255, 0.2)' 
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 
                    className="text-white font-bold" 
                    style={{ fontSize: '14px', marginBottom: '4px' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-gray-400" 
                    style={{ fontSize: '12px', lineHeight: '1.4' }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
