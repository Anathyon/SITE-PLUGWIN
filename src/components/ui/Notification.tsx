/**
 * Componente de Notificação LGPD
 * Exibe um banner informativo sobre adequação à LGPD
 * Auto-dismiss após 5 segundos ou ao clicar no botão fechar
 */
import { useState, useEffect } from 'react';
import { Shield, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

export const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Auto-dismiss após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className={cn("fixed bottom-6 left-6 z-60 max-w-sm w-full")}
        >
          <div className="bg-[#1a1b23] rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden" style={{padding:"1.5rem"}}>
            {/* Glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-blue-500 opacity-50" />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/5"
              style={{ padding: '4px' }}
            >
              <X size={16} />
            </button>

            <div className="flex" style={{ gap: '16px' }}>
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9]/20 flex items-center justify-center text-[#9F7AEA]">
                  <Shield size={20} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base" style={{ marginBottom: '4px' }}>Adequado à LGPD</h3>
                <p className="text-gray-400 text-sm leading-relaxed" style={{ marginBottom: '12px' }}>
                  Nosso portal já está adequado à LGPD. (Lei Geral de Proteção de Dados, nº 13.709 com vigência a partir de agosto de 2020.)
                </p>
                <a 
                  href="https://intuix-capacitor-app.prod.intuix.com.br/customers/4e268e09-b22b-4133-b063-edfe3d4932ff/reporting-channel" 
                  className="text-[#9F7AEA] hover:text-[#B794F4] text-sm font-medium flex items-center transition-colors group w-fit"
                  style={{ gap: '4px' }}
                >
                  Acessar plataforma
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
