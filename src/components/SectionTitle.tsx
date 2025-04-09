import { motion } from 'framer-motion';
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, id }) => {
  return (
    <div className="text-center mb-12" id={id}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-primary-500"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl italic text-primary-500/80 mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle; 