/**
 * Componente principal da aplicação
 * Gerencia rotas e layout geral do site
 */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { BlogSection } from './components/sections/BlogSection';
import { Notification } from './components/ui/Notification';
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
      
      {/* Notificação LGPD */}
      <Notification />
      
      {/* Sistema de rotas */}
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
      
      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
