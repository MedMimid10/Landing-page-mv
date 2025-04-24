import { AnimatePresence, motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import React from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
    features: string[];
    price: string;
    screenshots: string[];
  } | null;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Modal */}
            <div className="fixed inset-0 flex items-start md:items-center justify-center z-50 p-4 overflow-y-auto">
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-5xl w-full my-4 mx-auto relative max-h-[calc(100vh-2rem)] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Header */}
                <div className="sticky top-0 z-20 bg-gradient-to-r from-primary-500 to-primary-400 p-5 md:pt-14 pt-5">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-white/80 mt-1 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Features & Pricing Section - 40% width */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-primary-500">
                    <span className="w-1 h-5 bg-primary-500 rounded-full mr-2"></span>
                    Features
                  </h3>
                  <ul className="space-y-2 mb-6 text-sm">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-semibold mb-1 flex items-center text-primary-500">
                      <span className="w-1 h-5 bg-primary-500 rounded-full mr-2"></span>
                      Pricing
                    </h3>
                    <p className="text-lg font-bold text-primary-500">{service.price}</p>
                  </div> */}
                </div>

                {/* Screenshots Section - 60% width */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold mb-4 flex items-center text-primary-500">
                    <span className="w-1 h-5 bg-primary-500 rounded-full mr-2"></span>
                    App Preview
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {service.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className="relative h-[350px] w-[200px] rounded-[1.5rem] overflow-hidden shadow-lg border-8 border-gray-800 bg-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-gray-800 rounded-b-lg z-0"></div>
                        <img
                          src={screenshot}
                          alt={`${service.title} screenshot ${index + 1}`}
                          className="w-full h-full object-bottom rounded-[1rem]"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={onClose}
                  className="btn-primary text-sm py-1.5 px-5"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal; 