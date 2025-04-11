// components/ServiceCard.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  ctaText: string;
  onCtaClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  ctaText,
  onCtaClick,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="relative h-[420px] perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-lg ${gradient}`}
        >
          <div className="bg-white/20 p-4 rounded-full mb-6">
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90 line-clamp-3">{description}</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-lg ${gradient}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-xl font-semibold text-white mb-6">Learn how this service works</p>
          <p className="text-white/80 mb-8">Get detailed information about features, pricing, and see app screenshots</p>
          <button
            className="btn-primary bg-white text-primary-500 hover:bg-white/50 px-6 py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              onCtaClick();
            }}
          >
            {ctaText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
