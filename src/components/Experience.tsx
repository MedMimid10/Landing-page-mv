import { animate, motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import SectionTitle from './SectionTitle';

const screenshots = [
  // Add 10-12 image objects here
  { url: "https://images.unsplash.com/photo-1597043851759-3b370e989b5f?auto=format&fit=crop&w=600", title: "Discover Local Experiences" },
  { url: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=600", title: "Book Authentic Tours" },
  { url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600", title: "Explore Historic Sites" },
  { url: "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?auto=format&fit=crop&w=600", title: "Navigate Local Markets" },
  { url: "https://images.unsplash.com/photo-1590766940722-a458fd4a0751?auto=format&fit=crop&w=600", title: "Experience Local Culture" },
  { url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600", title: "Enjoy Street Food" },
  { url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600", title: "Meet Local Artisans" },
  { url: "https://images.unsplash.com/photo-1616627562285-0f7b44c61b7f?auto=format&fit=crop&w=600", title: "Attend Cultural Events" },
  { url: "https://images.unsplash.com/photo-1582719478250-cfe71a16f9d4?auto=format&fit=crop&w=600", title: "Experience Desert Tours" },
  { url: "https://images.unsplash.com/photo-1581324093875-6a6c0e67fcf4?auto=format&fit=crop&w=600", title: "Discover Handicrafts" },
  { url: "https://images.unsplash.com/photo-1526655009434-c7f3b1ec2228?auto=format&fit=crop&w=600", title: "Explore Coastal Cities" },
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600", title: "Ride Through Atlas Mountains" }
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  const handleNavigate = (newIndex: number) => {
    setActiveIndex(newIndex);
    const container = containerRef.current;
    if (container) {
      const slideWidth = 320; // card width + margin
      animate(x, -newIndex * slideWidth, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    const threshold = 100;
    if (info.offset.x > threshold && activeIndex > 0) {
      handleNavigate(activeIndex - 1);
    } else if (info.offset.x < -threshold && activeIndex < screenshots.length - 1) {
      handleNavigate(activeIndex + 1);
    } else {
      handleNavigate(activeIndex);
    }
  };

  return (
      <section id="experience" className="py-16 gradient-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="App Experience"
            subtitle="A Glimpse into the Morocco View Experience"
          />

          <div className="relative">
            <button
                onClick={() => handleNavigate(Math.max(0, activeIndex - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
                className="overflow-hidden px-8"
                ref={containerRef}
            >
              <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  style={{ x }}
                  className="flex gap-8"
              >
                {screenshots.map((screenshot, index) => (
                    <motion.div
                        key={index}
                        className="flex-none cursor-pointer"
                        style={{ width: 300 }}
                        onClick={() => handleNavigate(index)}
                        animate={{
                          scale: index === activeIndex ? 1 : 0.9,
                          opacity: index === activeIndex ? 1 : 0.6,
                        }}
                    >
                      <div className="w-[300px] h-[600px] bg-white rounded-[3rem] shadow-xl p-3">
                        <img
                            src={screenshot.url}
                            alt={screenshot.title}
                            className="w-full h-full object-cover rounded-[2.5rem]"
                        />
                      </div>
                    </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <button
                onClick={() => handleNavigate(Math.min(screenshots.length - 1, activeIndex + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {screenshots.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleNavigate(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experience;
