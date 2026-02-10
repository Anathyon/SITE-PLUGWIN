/**
 * Componente GlassCard
 * Card com efeito glassmorphism e animação de hover
 * Utilizado em várias seções do site para manter consistência visual
 */
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassCard = ({ children, className, style }: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden",
        className
      )}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        ...style
      }}
      // Animação de elevação no hover
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
