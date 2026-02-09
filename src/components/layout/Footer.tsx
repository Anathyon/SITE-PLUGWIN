import { Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#0f1016', padding: '48px 0' }}>
      <div className="w-full" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col md:flex-row justify-between items-center" style={{ gap: '24px' }}>
          <div className="flex items-center" style={{ gap: '8px' }}>
            <img 
              src="https://site.plugwin.net/assets/img/logo_plugwin.png" 
              alt="PlugWin Logo" 
              style={{ height: '32px', width: 'auto', filter: 'grayscale(100%)', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
            />
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} PlugWin Sistemas. Todos os direitos reservados.
          </div>

          <div className="flex items-center" style={{ gap: '24px' }}>
            <a href="https://www.instagram.com/plugwinsistemas/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9F7AEA] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/plugwinsistemas?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9F7AEA] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5588994368177" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9F7AEA] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@PlugwinSistemas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9F7AEA] transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
