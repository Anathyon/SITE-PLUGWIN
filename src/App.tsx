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

// Product Components
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
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <About />
            <Services />
            <Projects />
            <BlogSection />
          </>
        } />
        
        {/* Product Routes */}
        <Route path="/project/pwmed" element={<PWMed />} />
        <Route path="/project/pwleg" element={<PWLeg />} />
        <Route path="/project/pwedu" element={<PWEdu />} />
        <Route path="/project/portal-legislativo" element={<PortalLegislativo />} />
        <Route path="/project/panorama-broadcast" element={<PanoramaBroadcast />} />
        <Route path="/project/pwork" element={<PWork />} />
        <Route path="/project/diario-oficial" element={<DiarioOficial />} />
        <Route path="/project/pwged" element={<PWGED />} />
        <Route path="/project/webmail-corporativo" element={<WebmailCorporativo />} />
        <Route path="/project/e-sic" element={<ESIC />} />
        <Route path="/project/portal-corporativo" element={<PortalCorporativo />} />
        <Route path="/project/ouvidoria" element={<Ouvidoria />} />
        <Route path="/project/institucional-legislativo" element={<InstitucionalLegislativo />} />
        <Route path="/project/institucional-executivo" element={<InstitucionalExecutivo />} />
        <Route path="/project/protocolo-digital" element={<ProtocoloDigital />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
