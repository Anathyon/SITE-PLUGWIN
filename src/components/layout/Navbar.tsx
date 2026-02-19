import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { projects } from '../../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/'); // Simplified navigation logic
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500 ease-out",
        isScrolled ? "bg-[#0f1016]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
      style={{
        padding: isScrolled ? '12px 24px' : '30px 24px',
        zIndex: 9997
      }}
    >
      <div 
        className="w-full flex items-center"
        style={{
          justifyContent: 'space-between',
          maxWidth: '100%',
        }}
      >
        <Link to="/" className="flex items-center" style={{ gap: '8px' }}>
           <img 
            src="https://site.plugwin.net/assets/img/logo_plugwin.png" 
            alt="PlugWin Logo" 
            style={{ 
              height: isScrolled ? '40px' : '63px', 
              width: 'auto', 
              filter: 'brightness(0) invert(1)',
              transition: 'height 0.5s ease-out'
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center" style={{ 
          gap: '32px',
          marginLeft: 'auto' 
        }}>
          {/* Products Dropdown */}
          <div className="relative group">
            <button 
              className={cn("flex items-center text-gray-300 hover:text-white transition-colors font-medium bg-transparent border-none cursor-pointer")}
              style={{ padding: '8px 0', gap: '4px', fontSize: '16.1px' }}
              onMouseEnter={() => setIsProductMenuOpen(true)}
              onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
            >
              Produtos
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <div 
              className={cn("absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0")}
              style={{ width: '280px', paddingTop: '8px', right: 0, left: 'auto' }}
            >
              <div 
                className={cn("bg-[#0f1016] border border-white/10 rounded-xl shadow-2xl overflow-hidden")}
                style={{ padding: '8px', maxHeight: '600px', overflowY: 'auto' }}
              >
                {projects.map((project) => (
                  <Link
                    key={project.slug}
                    to={`/project/${project.slug}`}
                    className={cn("block text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors")}
                    style={{ padding: '10px 16px', marginBottom: '2px' }}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer"
              style={{ padding: 0 }}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className={cn("text-white rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-[#6D28D9]/50 cursor-pointer border-none")}
            style={{
              backgroundColor: '#6D28D9',
              padding: '10px 24px',
              marginLeft: '8px'
            }}
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ padding: '4px', marginLeft: 'auto' }}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay - Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden"
          style={{ 
            zIndex: 99998,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div 
          className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0f1016] md:hidden flex flex-col shadow-2xl border-l border-white/10"
          style={{ 
            zIndex: 99999,
            position: 'fixed',
            height: '100vh',
            overflowY: 'auto'
          }}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between border-b border-white/10" 
            style={{ padding: '24px', flexShrink: 0 }}
          >
            <span className="text-white font-semibold text-lg">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
              style={{ padding: '4px' }}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div 
            className="flex-1 flex flex-col" 
            style={{ padding: '24px', gap: '16px', overflowY: 'auto' }}
          >
            {/* Produtos Dropdown */}
            <div className="border-b border-white/10" style={{ paddingBottom: '16px' }}>
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between text-gray-300 hover:text-white text-lg font-medium bg-transparent border-none cursor-pointer"
                style={{ padding: '8px 0' }}
              >
                <span>Produtos</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    isMobileProductsOpen ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              {isMobileProductsOpen && (
                <div 
                  className="flex flex-col"
                  style={{ 
                    gap: '8px', 
                    paddingLeft: '8px',
                    marginTop: '8px',
                    maxHeight: '320px',
                    overflowY: 'auto'
                  }}
                >
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/project/${project.slug}`}
                      className="text-gray-400 hover:text-white text-sm transition-colors border-l-2 border-transparent hover:border-[#6D28D9]"
                      style={{ padding: '8px 0 8px 12px' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Nav Links */}
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-white text-lg font-medium text-left bg-transparent border-none cursor-pointer"
                style={{ padding: '8px 0' }}
              >
                {link.name}
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full text-white rounded-lg font-medium shadow-lg hover:shadow-[#6D28D9]/50 transition-all cursor-pointer border-none"
              style={{
                backgroundColor: '#6D28D9',
                padding: '12px 0',
                marginTop: 'auto'
              }}
            >
              Fale Conosco
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
