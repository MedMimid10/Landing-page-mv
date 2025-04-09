import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import SectionTitle from './SectionTitle';

const EventCalendar = () => {
  const events = [
    {
      title: "A Thousand and One Nights",
      titleAr: "ألف ليلة وليلة",
      date: "March 15-20, 2024",
      location: "Marrakech | Cultural Festival",
      price: "$50",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800"
    },
    {
      title: "Evening at the Square",
      date: "March 22, 2024",
      location: "Marrakech | Street Performances",
      price: "$25",
      image: "https://images.unsplash.com/photo-1547644781-2019f56c4b7b?auto=format&fit=crop&w=800"
    },
    {
      title: "Fes Sacred Music Festival",
      date: "March 25-30, 2024",
      location: "Fes | Music & Arts",
      price: "$75",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800"
    },
    {
      title: "Camel Trek Experience",
      date: "March 28, 2024",
      location: "Merzouga | Desert Tour",
      price: "$120",
      image: "https://images.unsplash.com/photo-1527631120902-378417754324?auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section id="events" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="What's Happening This Month"
          subtitle="Explore cultural events and experiences"
        />

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className="w-6 h-6 text-primary-500" />
          </button>
          
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex space-x-6 px-8">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[300px]"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                    <div className="h-48 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {event.titleAr && (
                        <div className="absolute top-4 right-4">
                          <span className="ar text-2xl font-bold text-white">{event.titleAr}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-primary-500 mb-2">{event.title}</h3>
                      <p className="text-primary-500/80 mb-2">{event.date}</p>
                      <p className="text-primary-500/80 mb-4">{event.location}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary-500">{event.price}</span>
                        <button className="btn-primary">Buy Tickets</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg">
            <ChevronRight className="w-6 h-6 text-primary-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCalendar;