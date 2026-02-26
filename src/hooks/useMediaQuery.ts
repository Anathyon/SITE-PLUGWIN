import { useState, useEffect } from 'react';

/**
 * Hook customizado para lidar com media queries.
 * @param query A string da media query (ex: '(max-width: 768px)')
 * @returns Boolean indicando se a query corresponde ao estado atual.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}
