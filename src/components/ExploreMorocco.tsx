import { motion } from 'framer-motion';
import { MapPin, Music, ShoppingBag, Utensils } from 'lucide-react';
import React from 'react';
import SectionTitle from './SectionTitle';

const categories = [
  {
    title: "Monuments",
    icon: MapPin,
    description: "Discover Morocco's rich architectural heritage, from ancient medinas to imperial cities.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800",
    bullets: ["Hassan II Mosque", "Bahia Palace", "Volubilis Roman ruins"]
  },
  {
    title: "Souks",
    icon: ShoppingBag,
    description: "Immerse yourself in the vibrant traditional markets of Morocco.",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/3b/eb.jpg",
    bullets: ["Spice markets", "Handcrafted goods", "Traditional carpets"]
  },
  {
    title: "Entertainment",
    icon: Music,
    description: "Experience the lively cultural performances and festivals.",
    image: "https://images.unsplash.com/photo-1590766940722-a458fd4a0751?auto=format&fit=crop&w=800",
    bullets: ["Gnawa music", "Fire dancers", "Street performers"]
  },
  {
    title: "Cuisine",
    icon: Utensils,
    description: "Savor the flavors of authentic Moroccan gastronomy.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800",
    bullets: ["Tagine dishes", "Mint tea ceremony", "Local pastries"]
  }
];

const ExploreMorocco = () => {
  return (
    <section id="explore" className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Explore Morocco"
          subtitle="Discover the diverse experiences Morocco has to offer"
        />

        <div className="space-y-24">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative w-[300px] h-[600px] mx-auto">
                  <div className="absolute inset-0 bg-white rounded-[3rem] shadow-xl transform -rotate-6">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover rounded-[2.5rem]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <category.icon className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-bold text-primary-500">{category.title}</h3>
                <p className="text-primary-500/80">{category.description}</p>
                <ul className="space-y-3">
                  {category.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-500" />
                      <span className="text-primary-500">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-primary">Learn More</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMorocco;