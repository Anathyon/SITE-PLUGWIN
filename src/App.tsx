/**
 * Componente principal da aplicação
 * Gerencia rotas e layout geral do site
 */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { BlogSection } from './components/sections/BlogSection';
import { Notification } from './components/ui/Notification';
import { Blob } from './components/ui/Blob';
import { FloatingOrbs } from './components/ui/FloatingOrbs';
import { BlogPost } from './components/pages/BlogPost';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

// Importação de componentes de produtos
import { PWMed } from './components/pages/products/PWMed';
import { PWLeg } from './components/pages/products/PWLeg';
import { PWEdu } from './components/pages/products/PWEdu';
import { PortalLegislativo } from './components/pages/products/PortalLegislativo';
import { PanoramaBroadcast } from './components/pages/products/PanoramaBroadcast';
import { PWork } from './components/pages/products/PWork';
import { DiarioOficial } from './components/pages/products/DiarioOficial';
import { PWGED } from './components/pages/products/PWGED';
import { WebmailCorporativo } from './components/pages/products/WebmailCorporativo';
import { ESIC } from './components/pages/products/ESIC';
import { PortalCorporativo } from './components/pages/products/PortalCorporativo';
import { Ouvidoria } from './components/pages/products/Ouvidoria';
import { InstitucionalLegislativo } from './components/pages/products/InstitucionalLegislativo';
import { InstitucionalExecutivo } from './components/pages/products/InstitucionalExecutivo';
import { ProtocoloDigital } from './components/pages/products/ProtocoloDigital';

function App() {
  return (
    <>
      {/* Navegação fixa no topo */}
      <Navbar />
      
      {/* Scroll fixo no topo ao mudar de página */}
      <ScrollToTop />
      
      {/* Notificação LGPD */}
      <Notification />

      {/* Global Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Blob className="bg-primary/30" style={{ position: 'absolute', top: 0, left: 0, width: '384px', height: '384px' }} />
        <Blob className="bg-accent/30" delay={2} style={{ position: 'absolute', bottom: 0, right: 0, width: '384px', height: '384px' }} />
        <Blob className="bg-purple-500/20" delay={4} style={{ position: 'absolute', top: '50%', left: '50%', width: '256px', height: '256px' }} />
        <FloatingOrbs />
      </div>
      
      {/* Sistema de rotas */}
      <div className="relative z-10">
        <Routes>
        {/* Página inicial com todas as seções */}
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <About />
            <Services />
            <Projects />
            <BlogSection />
            <Testimonials />
            <Contact />
          </>
        } />
        
        {/* Rotas de produtos */}
        <Route path="/project/pwmed" element={<PWMed />} />
        <Route path="/project/pwleg" element={<PWLeg />} />
        <Route path="/project/pwedu" element={<PWEdu />} />
        <Route path="/project/portal-legislativo" element={<PortalLegislativo />} />
        <Route path="/project/panorama-broadcast" element={<PanoramaBroadcast />} />
        <Route path="/project/pwork" element={<PWork />} />
        <Route path="/project/diario" element={<DiarioOficial />} />
        <Route path="/project/pwged" element={<PWGED />} />
        <Route path="/project/email" element={<WebmailCorporativo />} />
        <Route path="/project/esic" element={<ESIC />} />
        <Route path="/project/corporativo" element={<PortalCorporativo />} />
        <Route path="/project/ouvidoria" element={<Ouvidoria />} />
        <Route path="/project/instlegis" element={<InstitucionalLegislativo />} />
        <Route path="/project/instexec" element={<InstitucionalExecutivo />} />
        <Route path="/project/protocolo" element={<ProtocoloDigital />} />
        
        {/* Rota de posts do blog */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      </div>
      
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
