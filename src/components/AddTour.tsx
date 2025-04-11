import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionTitle from './SectionTitle';

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
          <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center group cursor-pointer">
            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1600"
            alt="Tutorial preview"
            className="w-full h-full object-cover"
          />
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
            {/* <button className="btn-outline flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Try Adding a Tour Now
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTour;