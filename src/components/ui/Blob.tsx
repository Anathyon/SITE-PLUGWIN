import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface BlobProps {
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const Blob = ({ className, delay = 0, style }: BlobProps) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob",
        className
      )}
      style={style}
      animate={{
        scale: [1, 1.1, 0.9, 1],
        x: [0, 20, -20, 0],
        y: [0, -20, 20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};
