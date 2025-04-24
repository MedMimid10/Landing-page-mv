import { animate, motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';
import home from '../assets/screens/dashboard.jpeg';
import emergency_contacts from '../assets/screens/emergency_contact.jpeg';
import esim from '../assets/screens/esim_list.jpeg';
import esim_purchase from '../assets/screens/esim_buy.jpeg';
import events from '../assets/screens/event_gtx_details.jpeg';
import currency from '../assets/screens/money_exange.jpeg';
import pickup1 from '../assets/screens/pickupRemp.jpg';
import exch1 from '../assets/screens/moneyEXRemp.jpg';
import enter1 from '../assets/screens/Screenshot_2025-04-17-13-12-13-130_host.exp.exponent.jpg';
import restau from '../assets/screens/Screenshot_2025-04-17-13-13-15-439_host.exp.exponent.jpg';

const screenshots = [
  // Morocco View app screenshots from the shared images
  { 
    url: home, 
    title: "Explore Morocco" 
  },
  { 
    url: emergency_contacts, 
    title: "Emergency Contacts" 
  },
  { 
    url: esim, 
    title: "eSIM Services" 
  },
  { 
    url: esim_purchase, 
    title: "Buy eSIM" 
  },
  { 
    url: events, 
    title: "Gitex Africa Morocco" 
  },
  { 
    url: currency, 
    title: "Currency Converter" 
  },
  {
    url: pickup1,
    title: "Hotel Pickup"
  },
  {
    url: exch1,
    title: "Money Exchange  Brokers"
  },
  {
    url: enter1,
    title: "Entertainments"
  },
  {
    url: restau,
    title: "Restaurants"
  },

];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const cardWidth = 300; // Fixed card width
  const cardGap = 20;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerWidth) {
      // Update the center position when container width changes or active index changes
      centerActiveCard();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, activeIndex]);

  const centerActiveCard = () => {
    if (!containerRef.current || !carouselRef.current) return;
    
    const containerCenter = containerWidth / 2;
    const totalCardWidth = cardWidth + cardGap;
    const activeCardOffset = activeIndex * totalCardWidth;
    const centerOffset = containerCenter - (cardWidth / 2);
    
    // Set the x position to center the active card
    animate(x, centerOffset - activeCardOffset, { 
      type: "spring", 
      stiffness: 400, 
      damping: 30
    });
  };

  const handleNavigate = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= screenshots.length) return;
    setActiveIndex(newIndex);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    const threshold = 50;
    if (info.offset.x > threshold && activeIndex > 0) {
      handleNavigate(activeIndex - 1);
    } else if (info.offset.x < -threshold && activeIndex < screenshots.length - 1) {
      handleNavigate(activeIndex + 1);
    } else {
      centerActiveCard();
    }
  };

  const getScreenshotPosition = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    
    if (distance === 0) {
      return { scale: 1, opacity: 1, y: 0, zIndex: 10 };
    } else if (distance === 1) {
      return { 
        scale: 0.85, 
        opacity: 0.7, 
        y: 30,
        zIndex: 5
      };
    } else if (distance === 2) {
      return { 
        scale: 0.7, 
        opacity: 0.4, 
        y: 60,
        zIndex: 1
      };
    } else {
      return { 
        scale: 0.6, 
        opacity: 0, 
        y: 80,
        zIndex: 0
      };
    }
  };

  return (
    <section id="experience" className="py-16 gradient-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="App Experience"
          subtitle="A Glimpse into the Morocco View Experience"
        />

        <div className="mt-10 mb-6 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold">{screenshots[activeIndex]?.title}</h3>
          <p className="mt-2 text-white/80">Swipe or use arrows to explore more features</p>
        </div>

        <div className="relative" ref={containerRef}>
          <button
            onClick={() => handleNavigate(activeIndex - 1)}
            disabled={activeIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="overflow-hidden py-16">
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{ x }}
              className="flex will-change-transform"
            >
              {screenshots.map((screenshot, index) => {
                const position = getScreenshotPosition(index);
                
                return (
                  <motion.div
                    key={index}
                    className="flex-none cursor-pointer"
                    style={{ 
                      width: cardWidth, 
                      marginRight: cardGap,
                      zIndex: position.zIndex
                    }}
                    onClick={() => handleNavigate(index)}
                    initial={false}
                    animate={{
                      scale: position.scale,
                      opacity: position.opacity,
                      y: position.y
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30
                    }}
                  >
                    <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] shadow-xl p-3 overflow-hidden transition-all">
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="w-full h-full object-bottom rounded-[2.5rem]"
                      />
                      <div className={`absolute inset-0 rounded-[2.5rem] ${index === activeIndex ? 'bg-gradient-to-t from-black/50 to-transparent' : 'bg-black/20'}`}></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all">
                        <h4 className="text-lg font-semibold truncate">{screenshot.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={() => handleNavigate(activeIndex + 1)}
            disabled={activeIndex === screenshots.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors ${activeIndex === screenshots.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
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
                index === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
