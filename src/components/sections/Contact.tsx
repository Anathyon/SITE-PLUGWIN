import { GlassCard } from '../ui/GlassCard';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef, useState } from 'react';

import { useContactStore } from '../../store/useContactStore';

/**
 * Componente de Seção de Contato.
 * Gerencia o formulário de contato, validação e exibição de informações de endereço/redes sociais.
 * Utiliza o `useContactStore` para gerenciamento de estado global do formulário.
 * 
 * @returns {JSX.Element} O componente Contact renderizado.
 */
const HCAPTCHA_SITE_KEY = 'ea6eb0d4-d650-4c6c-a69e-0ec20666961e';

export const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const { 
    formData, 
    errors, 
    isSubmitting, 
    setField, 
    setIsSubmitting, 
    resetForm, 
    validate 
  } = useContactStore();

  /**
   * Lida com o envio do formulário.
   * Valida os campos antes de processar.
   * 
   * @param {React.FormEvent} e Evento de submissão do formulário.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      if (!captchaToken) {
        alert('Por favor, complete o desafio de segurança (hCaptcha).');
        setIsSubmitting(false);
        return;
      }
      
      // Integração futura com serviço de email
      alert('Mensagem enviada com sucesso!');
      resetForm();
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof typeof formData; value: string };
    setField(name, value);
  };

  return (
    <section id="contact" className="relative flex justify-center items-center" style={{ padding: '5rem 0' }}>
      <div className="w-[80dvw]" style={{ paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '3rem' }}>
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
              Vamos Conversar?
            </h2>
            <p className="text-gray-400 text-lg" style={{ marginBottom: '2rem' }}>
              Entre em contato conosco! Nossa equipe está pronta para atender suas necessidades com agilidade e eficiência.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium" style={{ marginBottom: '0.25rem' }}>Email</h4>
                  <p className="text-gray-400">contato@plugwin.net</p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium" style={{ marginBottom: '0.25rem' }}>Endereço</h4>
                  <p className="text-gray-400">
                    R Maria do Nazaré dos Santos, 34<br />
                    Meruoca-CE, 62.130-000
                  </p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: '1rem' }}>
                <div style={{ padding: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-medium" style={{ marginBottom: '0.25rem' }}>Telefone</h4>
                  <p className="text-gray-400">(88) 99436-8177</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <GlassCard style={{ padding: '2rem' }}>
              <h3 className="text-2xl font-bold text-white" style={{ marginBottom: '1.5rem' }}>
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="text-sm text-gray-400">Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg  text-white focus:outline-none focus:border-accent transition-colors"
                      placeholder="Seu nome"
                      style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }}  
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="text-sm text-gray-400">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg  text-white focus:outline-none focus:border-accent transition-colors"
                      placeholder="seu@email.com"
                      style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }}  
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="text-sm text-gray-400">Assunto</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Como podemos ajudar?"
                    style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }}
                  />
                  {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="text-sm text-gray-400">Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Descreva seu projeto..."
                    style={{ paddingInline: '1rem', paddingBlock: '0.75rem' }}
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center"
                  style={{ gap: '0.5rem', padding: '1rem', marginTop: '1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  <Send className="w-4 h-4" />
                </button>

                <div className="flex justify-center" style={{ marginTop: '1rem' }}>
                  <HCaptcha
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                    ref={captchaRef}
                    theme="dark"
                  />
                </div>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
