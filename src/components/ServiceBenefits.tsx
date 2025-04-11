// components/ServiceBenefits.tsx
import { motion } from 'framer-motion';
import { Car, DollarSign, Wifi } from 'lucide-react';
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

// Define the service structure
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  features: string[];
  price: string;
  screenshots: string[];
}

const services: Service[] = [
  {
    id: 'esim',
    title: 'eSIM Service',
    description: 'Prepaid eSIM for seamless connectivity in Saudi Arabia. Stay connected with high-speed data throughout your entire trip.',
    icon: Wifi,
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400',
    features: [
      '5GB of 4G/5G data',
      'National coverage',
      'Instant activation',
      'Easy setup process',
      '24/7 customer support',
      'Valid for 30 days'
    ],
    price: '25 USD',
    screenshots: [
      '/screenshots/esim1.png',
      '/screenshots/esim2.png',
      '/screenshots/esim3.png'
    ]
  },
  {
    id: 'hotel-pickup',
    title: 'Hotel Pickup Service',
    description: 'Smooth, reliable transport from your hotel. Professional drivers and comfortable vehicles to make your journey pleasant.',
    icon: Car,
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400',
    features: [
      'Air-conditioned vehicles',
      'English-speaking drivers',
      'Real-time tracking',
      'Door-to-door service',
      'Flexible scheduling',
      'Cancel up to 24h before'
    ],
    price: 'Starting from 30 USD',
    screenshots: [
      '/screenshots/pickup1.png',
      '/screenshots/pickup2.png',
      '/screenshots/pickup3.png'
    ]
  },
  {
    id: 'money-exchange',
    title: 'Money Exchange Service',
    description: 'Competitive rates for hassle-free currency exchange. Convert your money safely and quickly with our trusted service.',
    icon: DollarSign,
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-400',
    features: [
      'Real-time exchange rates',
      'Multiple currencies supported',
      'Low transaction fees',
      'Secure transactions',
      'Instant processing',
      'Digital receipts'
    ],
    price: '1% of transaction amount',
    screenshots: [
      '/screenshots/exchange1.png',
      '/screenshots/exchange2.png',
      '/screenshots/exchange3.png'
    ]
  },
];

const ServiceBenefits: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SectionTitle
          title="Essential Services"
          subtitle="Everything you need for a smooth journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                ctaText="Discover Details"
                onCtaClick={() => handleServiceClick(service)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            All of our services are available through our mobile app for a seamless travel experience
          </p>
          {/* <div className="flex justify-center gap-4">
            <a href="#" className="btn-primary">Get the App</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div> */}
        </motion.div>
      </motion.div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          .perspective-1000 { perspective: 1000px; }
          .backface-hidden { backface-visibility: hidden; }
        `
      }} />
    </section>
  );
};

export default ServiceBenefits;
