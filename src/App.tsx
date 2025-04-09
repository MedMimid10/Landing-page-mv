import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AddTour from './components/AddTour';
import BackToTop from './components/BackToTop';
import EventCalendar from './components/EventCalendar';
import Experience from './components/Experience';
import ExploreMorocco from './components/ExploreMorocco';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ServiceBenefits from './components/ServiceBenefits';
import ServiceDetails from './components/ServiceDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
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
          } />
          <Route path="/services" element={<ServiceDetails />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;