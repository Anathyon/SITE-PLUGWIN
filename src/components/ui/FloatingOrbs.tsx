import { motion } from 'framer-motion';

export const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none user-select-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 60 + 30 + 'px',
            height: Math.random() * 60 + 30 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            filter: 'blur(3px)',
            boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.05)',
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 80 - 40, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: Math.random() * 12 + 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
       {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ufo-${i}`}
          className="absolute rounded-full"
          style={{
            width: '120px',
            height: '6px',
            left: '-10%',
            top: Math.random() * 100 + '%',
            background: 'linear-gradient(to right, transparent, rgba(168, 85, 247, 0.4), white, rgba(168, 85, 247, 0.4), transparent)',
            boxShadow: '0 0 15px 4px rgba(168, 85, 247, 0.3)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: ['0vw', '110vw'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 15,
          }}
        />
       ))}
    </div>
  );
};
