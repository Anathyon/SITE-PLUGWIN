/**
 * Utilitário para buscar imagens do Unsplash
 */

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_API = 'https://api.unsplash.com';

interface UnsplashImage {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
  };
}

/**
 * Busca uma imagem aleatória do Unsplash
 */
export const getRandomImage = async (query?: string): Promise<string> => {
  try {
    const url = query 
      ? `${UNSPLASH_API}/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
      : `${UNSPLASH_API}/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`;
    
    const response = await fetch(url);
    const data: UnsplashImage = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Erro ao buscar imagem do Unsplash:', error);
    return '';
  }
};

/**
 * Busca múltiplas imagens do Unsplash
 */
export const searchImages = async (query: string, perPage = 10): Promise<UnsplashImage[]> => {
  try {
    const response = await fetch(
      `${UNSPLASH_API}/search/photos?query=${query}&per_page=${perPage}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar imagens do Unsplash:', error);
    return [];
  }
};

/**
 * Gera URL de imagem do Unsplash com parâmetros customizados
 */
export const getUnsplashUrl = (imageId: string, width?: number, height?: number): string => {
  let url = `https://source.unsplash.com/${imageId}`;
  if (width && height) {
    url += `/${width}x${height}`;
  } else if (width) {
    url += `/${width}`;
  }
  return url;
};

/**
 * URL de imagem aleatória do Unsplash (sem API key necessária)
 * Útil para placeholders
 */
export const getUnsplashPlaceholder = (width: number, height: number, query?: string): string => {
  const baseUrl = `https://source.unsplash.com/random/${width}x${height}`;
  return query ? `${baseUrl}?${query}` : baseUrl;
};
