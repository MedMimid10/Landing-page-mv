import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import create_tour from '../assets/videos/create_tour.mp4';

const AddTour = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <section id="tours" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
              title="Create Your Dream Tour"
              subtitle="Share your Moroccan adventure with travelers worldwide"
          />

          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Embedded YouTube Video */}
            <video
              src={create_tour}
              controls
              className="w-full h-full rounded-2xl"
            >
              Your browser does not support the video tag.
            </video>

          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-primary-500 mb-8 max-w-2xl mx-auto">
              Create and share your unique Moroccan experiences with our easy-to-use tour creation platform.
              Whether you're a local guide or a travel enthusiast, your perspective matters.
            </p>
            <div className="flex justify-center">
              <button className="btn-primary flex items-center justify-center w-52" onClick={() => scrollToSection('pricing')}>
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AddTour;
