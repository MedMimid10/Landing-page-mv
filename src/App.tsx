import { motion } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddTour from './components/AddTour';
import BackToTop from './components/BackToTop';
import EventCalendar from './components/EventCalendar';
import Experience from './components/Experience';
import ExploreMorocco from './components/ExploreMorocco';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import ServiceBenefits from './components/ServiceBenefits';
import BusinessPartner from './pages/BusinessPartner';

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
          {/* <Route path="/services" element={<ServiceDetails />} /> */}
          <Route path="/business-partner" element={<BusinessPartner />} />
        </Routes>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;