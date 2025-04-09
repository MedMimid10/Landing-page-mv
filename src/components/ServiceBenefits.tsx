import { motion } from 'framer-motion';
import { Car, DollarSign, Wifi } from 'lucide-react';
import React from 'react';
import SectionTitle from './SectionTitle';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  ctaText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, gradient, ctaText }) => {
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
        {/* Front of card */}
        <div
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${gradient}`}
        >
          <Icon className="w-12 h-12 text-white mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center text-center backface-hidden ${gradient}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <p className="text-xl font-semibold text-white mb-6">Discover how it works!</p>
          <button className="btn-primary bg-white text-primary-500 hover:bg-white/90">
            {ctaText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const services = [
  {
    title: 'eSIM',
    description: 'Prepaid eSIM for seamless connectivity in Saudi Arabia.',
    icon: Wifi,
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-50',
    ctaText: 'Activate Now'
  },
  {
    title: 'Hotel Pickup',
    description: 'Smooth, reliable transport from your hotel.',
    icon: Car,
    gradient: 'bg-gradient-to-r from-primary-50 to-primary-500',
    ctaText: 'Book Transfer'
  },
  {
    title: 'Money Exchange',
    description: 'Competitive rates for hassle-free currency exchange.',
    icon: DollarSign,
    gradient: 'bg-gradient-to-r from-primary-500/80 to-primary-50',
    ctaText: 'Check Rates'
  }
];

const ServiceBenefits = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Essential Travel Services"
          subtitle="Everything you need for a smooth journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `
      }} />
    </section>
  );
};

export default ServiceBenefits;