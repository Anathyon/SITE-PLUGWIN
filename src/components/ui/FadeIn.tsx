import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { FadeInProps } from '../../types/components';

interface ExtendedFadeInProps extends FadeInProps {
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn = ({ children, delay = 0, direction = 'up', className, style }: ExtendedFadeInProps) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};
