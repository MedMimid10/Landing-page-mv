import { motion } from 'framer-motion';
import { MapPin, Music, ShoppingBag, Utensils } from 'lucide-react';
import SectionTitle from './SectionTitle';

const categories = [
  {
    title: "Monuments",
    icon: MapPin,
    description: "Discover Morocco's rich architectural heritage, from ancient medinas to imperial cities.",
    image: "https://images.unsplash.com/photo-1581444072387-f3cbbcc8fe33?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bullets: ["Hassan II Mosque", "Bahia Palace", "Jamaa el-Fna"]
  },
  {
    title: "Artisanal Souks",
    icon: ShoppingBag,
    description: "Immerse yourself in the vibrant traditional markets of Morocco.",
    image: "https://images.unsplash.com/photo-1605882090044-aa9cbe6df29e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bullets: ["Souks", "Handcrafted goods", "Traditional carpets", "Local crafts"]
  },
  {
    title: "Entertainment",
    icon: Music,
    description: "Experience the lively cultural performances and festivals.",
    image: "https://images.unsplash.com/photo-1674941237423-265dbce60724?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bullets: ["Nightlife", "Traditional Moroccan music", "Moroccan dance", "Cultural performances"]
  },
  {
    title: "Restaurants",
    icon: Utensils,
    description: "Discover the best Moroccan restaurants and culinary experiences."	,
    image: "https://images.unsplash.com/photo-1587289517919-b92407d60bbb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bullets: ["Moroccan cuisine", "International dishes", "Cafe culture", "Traditional Moroccan food"]
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
                {/* <button className="btn-primary">Learn More</button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMorocco;