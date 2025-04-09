// components/ServiceBenefits.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { Car, DollarSign, Wifi } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  ctaText: string;
  details: React.ReactNode;
  id: string;
}

const services: Service[] = [
  {
    id: 'esim',
    title: 'eSIM',
    description: 'Prepaid eSIM for seamless connectivity in Saudi Arabia.',
    icon: Wifi,
    gradient: 'bg-gradient-to-r from-primary-500 to-primary-50',
    ctaText: 'Activate Now',
    details: (
      <>
        <p>Avec notre eSIM prépayée, vous bénéficiez :</p>
        <ul className="list-disc list-inside mt-2">
          <li>De 5 Go de data 4G/5G</li>
          <li>Couverture nationale</li>
          <li>Activation instantanée</li>
        </ul>
        <p className="mt-4">Prix : <strong>25 USD</strong></p>
      </>
    ),
  },
  {
    id: 'hotel-pickup',
    title: 'Hotel Pickup',
    description: 'Smooth, reliable transport from your hotel.',
    icon: Car,
    gradient: 'bg-gradient-to-r from-primary-50 to-primary-500',
    ctaText: 'Book Transfer',
    details: (
      <>
        <p>Navette privée depuis votre hôtel :</p>
        <ul className="list-disc list-inside mt-2">
          <li>Véhicule climatisé</li>
          <li>Chauffeur anglophone</li>
          <li>Suivi en temps réel</li>
        </ul>
        <p className="mt-4">À partir de <strong>30 USD</strong></p>
      </>
    ),
  },
  {
    id: 'money-exchange',
    title: 'Money Exchange',
    description: 'Competitive rates for hassle-free currency exchange.',
    icon: DollarSign,
    gradient: 'bg-gradient-to-r from-primary-500/80 to-primary-50',
    ctaText: 'Check Rates',
    details: (
      <>
        <p>Taux de change en temps réel :</p>
        <ul className="list-disc list-inside mt-2">
          <li>USD → SAR</li>
          <li>EUR → SAR</li>
          <li>GBP → SAR</li>
        </ul>
        <p className="mt-4">Frais : <strong>1 %</strong> du montant</p>
      </>
    ),
  },
];

const ServiceBenefits: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services#${serviceId}`);
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Essential Travel Services"
          subtitle="Everything you need for a smooth journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <ServiceCard
                {...svc}
                onCtaClick={() => handleServiceClick(svc.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>

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
