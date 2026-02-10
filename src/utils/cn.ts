/**
 * Utilitário para mesclar classes CSS do Tailwind
 * Combina clsx para classes condicionais e tailwind-merge para resolver conflitos
 * @param inputs - Classes CSS a serem mescladas
 * @returns String com classes CSS otimizadas
 */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
