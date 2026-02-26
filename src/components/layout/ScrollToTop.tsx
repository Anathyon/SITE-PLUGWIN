import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que reseta o scroll para o topo toda vez que a rota muda.
 * Necessário em SPAs porque o navegador tende a manter a posição do scroll.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
