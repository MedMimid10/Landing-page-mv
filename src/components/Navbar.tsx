import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from '../assets/img/logo_morroco_view.svg';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Services", href: "#services" },
  { name: "Explore", href: "#explore" },
  { name: "Tours", href: "#tours" },
  { name: "Experience", href: "#experience" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Morocco View Logo" className="h-12" />
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
              className={`nav-link ${activeSection === item.href.substring(1) ? 'text-primary-500 font-semibold' : 'text-primary-500/70 hover:text-primary-500'}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('pricing')}
          >
            Request Demo
          </button>
          <button 
            className="md:hidden text-primary-500" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white py-4 px-6 shadow-lg rounded-b-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'text-primary-500 font-semibold' : 'text-primary-500/70 hover:text-primary-500'}`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('pricing');
              }}
              className="btn-primary text-center py-2"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;