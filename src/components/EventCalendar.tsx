import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';

const EventCalendar = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const checkScrollPosition = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };
  
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      // Check initially
      checkScrollPosition();
      
      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };

  const events = [
    {
      title: "CAF Africa Cup of Nations 2025",
      date: "December 21, 2025 - January 18, 2026",
      time: "Various Times",
      location: "Multiple Cities, Morocco",
      category: "Sports",
      description: "The biggest football tournament in Africa returns to Morocco, featuring 24 teams competing for continental glory.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800"
    },
    {
      title: "GITEX Morocco Tech Festival",
      date: "May 29-31, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Casablanca Exhibition Center",
      category: "Technology",
      description: "The largest technology showcase in North Africa featuring innovations, startups, and digital transformation.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800"
    },
    {
      title: "A Thousand and One Nights",
      date: "March 15-20, 2024",
      time: "7:00 PM",
      location: "Marrakech Cultural Center",
      category: "Cultural Festival",
      description: "Experience the magic of ancient Moroccan storytelling traditions.",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800"
    },
    {
      title: "Fes Sacred Music Festival",
      date: "March 25-30, 2024",
      time: "Various Times",
      location: "Fes Medina",
      category: "Music & Arts",
      description: "A celebration of spiritual and sacred music from around the world.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section id="events" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Upcoming Events"
          subtitle="Explore cultural events and experiences"
        />

        <div className="relative">
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
            style={{ pointerEvents: canScrollLeft ? 'auto' : 'none' }}
          >
            <button 
              onClick={scrollLeft}
              className={`bg-white p-2 rounded-full shadow-lg transition ${canScrollLeft ? 'opacity-100 hover:bg-gray-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-primary-500" />
            </button>
          </div>
          
          <div 
            ref={scrollRef}
            className="overflow-x-auto hide-scrollbar scroll-smooth px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScrollPosition}
          >
            <div className="flex gap-6 py-4 min-w-max">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[525px]"
                >
                  <div className="relative h-[325px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition">
                    {/* Background Image */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                    {/* Overlay with red gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/90 via-primary-500/10 to-transparent" />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col p-6 text-white">
                      {/* Top Section - Category */}
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary-500/90 rounded-full text-xs font-semibold">
                          {event.category}
                        </span>
                      </div>
                      
                      {/* Middle Section - Title and Description */}
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-sm text-white/90 mb-4 line-clamp-3">{event.description}</p>
                        
                        {/* Bottom Section - Date, Time & Location */}
                        <div className="flex flex-col gap-1 mt-2">
                          <div className="flex items-center text-sm">
                            <span className="font-medium mr-2">{event.date}</span>
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{event.time}</span>
                          </div>
                          <p className="text-sm font-medium">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
            style={{ pointerEvents: canScrollRight ? 'auto' : 'none' }}
          >
            <button 
              onClick={scrollRight}
              className={`bg-white p-2 rounded-full shadow-lg transition ${canScrollRight ? 'opacity-100 hover:bg-gray-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;