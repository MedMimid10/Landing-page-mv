import { motion } from 'framer-motion';
import React from 'react';
import AddTour from './components/AddTour';
import BackToTop from './components/BackToTop';
import EventCalendar from './components/EventCalendar';
import Experience from './components/Experience';
import ExploreMorocco from './components/ExploreMorocco';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ServiceBenefits from './components/ServiceBenefits';

function App() {
  return (
    <div className="min-h-screen bg-primary-50">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <EventCalendar />
        <ServiceBenefits />
        <ExploreMorocco />
        <AddTour />
        <Experience />
        <Pricing />
      </motion.div>
      <BackToTop />
    </div>
  );
}

export default App;