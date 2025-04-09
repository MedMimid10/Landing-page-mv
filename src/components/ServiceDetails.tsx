import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Car, DollarSign } from 'lucide-react';

interface ServiceSection {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  price: string;
  screenshots: string[];
}

const services: ServiceSection[] = [
  {
    id: 'esim',
    title: 'eSIM Service',
    icon: Wifi,
    description: 'Prepaid eSIM for seamless connectivity in Saudi Arabia',
    features: [
      '5GB of 4G/5G data',
      'National coverage',
      'Instant activation',
      'Easy setup process',
      '24/7 customer support'
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
    icon: Car,
    description: 'Smooth, reliable transport from your hotel',
    features: [
      'Air-conditioned vehicles',
      'English-speaking drivers',
      'Real-time tracking',
      'Door-to-door service',
      'Flexible scheduling'
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
    icon: DollarSign,
    description: 'Competitive rates for hassle-free currency exchange',
    features: [
      'Real-time exchange rates',
      'Multiple currencies supported',
      'Low transaction fees',
      'Secure transactions',
      'Instant processing'
    ],
    price: '1% of transaction amount',
    screenshots: [
      '/screenshots/exchange1.png',
      '/screenshots/exchange2.png',
      '/screenshots/exchange3.png'
    ]
  }
];

const ServiceDetails: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      
      <div className="space-y-24">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="w-12 h-12 text-primary-500" />
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>

              <p className="text-lg text-gray-600 mb-6">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xl font-semibold">
                    Price: <span className="text-primary-500">{service.price}</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">App Screenshots</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {service.screenshots.map((screenshot, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img
                          src={screenshot}
                          alt={`${service.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
