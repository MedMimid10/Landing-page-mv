// components/ServiceCard.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  ctaText: string;
  onCtaClick: () => void;    // ← nouveau
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  ctaText,
  onCtaClick,               // ← nouveau
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${gradient}`}
        >
          <Icon className="w-12 h-12 text-white mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${gradient}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-xl font-semibold text-white mb-6">Discover how it works!</p>
          <button
            className="btn-primary bg-white text-primary-500 hover:bg-white/90"
            onClick={onCtaClick}   // ← ici
          >
            {ctaText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
