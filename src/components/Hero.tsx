import { motion } from 'framer-motion';
import { Store as AppStore, Store as PlayStore } from 'lucide-react';
import React from 'react';
import mockupImg from '../assets/img/mockup-img.png';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 gradient-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold text-primary-500 mb-4">
            Morocco View
          </h1>
          <h2 className="text-2xl text-primary-500 mb-6">
            Your smart guide to Morocco's treasures
          </h2>
          <p className="text-lg text-primary-500 mb-8">
            Discover the magic of Morocco with our AI-powered travel companion. From ancient medinas to pristine beaches, let Morocco View be your guide to unforgettable experiences.
          </p>
          {/*  <div className="flex space-x-4">
            <button className="btn-primary flex items-center space-x-2">
              <PlayStore className="w-6 h-6" />
              <span>Google Play</span>
            </button>
            <button className="btn-primary flex items-center space-x-2">
              <AppStore className="w-6 h-6" />
              <span>App Store</span>
            </button>
          </div>*/}
          <div className="flex space-x-4" >
            <a href="#">
              <img  style={{ height: '80px', padding: '4px' }} 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a href="#">
            <img  style={{ height: '80px', padding: '4px' }} 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={mockupImg}
            alt="Morocco View App"
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
          {/*   <div className="w-[300px] h-[600px] mx-auto bg-white rounded-[3rem] shadow-xl transform -rotate-6 p-3">
          </div>*/}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;