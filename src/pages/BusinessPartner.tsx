import { motion } from 'framer-motion';
import { ArrowLeft, Award, Building, Check, ChevronDown, Clock, FileText, HelpCircle, ShieldCheck, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '/src/assets/img/backOffice_dashboard.png';
import Invoices from '/src/assets/img/backOffice_Inovices.png';
import Performance from '/src/assets/img/backOffice_performance.png';
import Tourists from '/src/assets/img/backOffice_tourist.png';

// Mock data for back office dashboard images
const backOfficeImages = [
  {
    id: 'dashboard',
    title: 'Dashboard Overview',
    description: 'Gain insights into your business performance with real-time data on users, revenue, and analytics.',
    image: '/src/assets/img/backOffice_dashboard.png',
    features: [
      'Real-time revenue tracking',
      'User acquisition metrics',
      'Daily transaction reports',
      'Purchase breakdown by service type'
    ]
  },
  {
    id: 'performance',
    title: 'Performance Rankings',
    description: 'Track your agency\'s performance across different cities and compare with other top partners.',
    image: '/src/assets/img/backOffice_performance.png',
    features: [
      'City-specific performance metrics',
      'Competitive ranking system',
      'Growth percentage tracking',
      'Monthly, weekly, and daily views'
    ]
  },
  {
    id: 'tourists',
    title: 'Tourist Management',
    description: 'Efficiently manage your clients with detailed tracking of their activity and purchases.',
    image: '/src/assets/img/backOffice_tourist.png',
    features: [
      'Comprehensive client database',
      'Purchase history tracking',
      'App download status',
      'Last activity monitoring'
    ]
  },
  {
    id: 'invoices',
    title: 'Weekly Invoices',
    description: 'Stay on top of your finances with automated weekly invoice generation and commission tracking.',
    image: '/src/assets/img/backOffice_invoices.png',
    features: [
      'Automated invoice generation',
      'Commission calculation',
      'PDF download capability',
      'Historical invoice archive'
    ]
  }
];

// FAQ items for Business Partners
const faqs = [
  {
    question: 'How do I become a Business Partner?',
    answer: 'To become a Business Partner, submit your application through our "Business Partner" plan. Our team will review your application and set up your back office access within 48 hours.'
  },
  {
    question: 'What commission structure do you offer?',
    answer: 'We offer a competitive 5% commission on all client purchases made through your agency. Commissions are calculated automatically and detailed in your weekly invoices.'
  },
  {
    question: 'How do I track my performance?',
    answer: 'The Performance Rankings section of your back office allows you to track your agency\'s performance across different cities, view growth percentages, and compare with other top agencies.'
  },
  {
    question: 'Can I manage multiple locations?',
    answer: 'Yes, you can manage multiple locations from a single back office account. Each location will have its own performance metrics and rankings in our system.'
  }
];

const BusinessPartner = () => {
  const [activeSection, setActiveSection] = useState<string>('dashboard');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleFaqClick = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-white to-primary-50">
      {/* Header with improved back button */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center bg-white text-primary-600 hover:text-primary-700 px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">Business Partner Program</h1>
          <p className="text-xl text-primary-500/80 max-w-3xl">
            Join our network of travel agencies and gain access to powerful tools designed to grow your business and enhance your clients' experience in Morocco.
          </p>
        </motion.div>
      </header>

      {/* Process Steps with improved styling */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-10 text-center">How to Get Started</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: 'Apply',
              description: 'Complete the Business Partner application form with your agency details.',
              icon: FileText
            },
            {
              step: 2,
              title: 'Verification',
              description: 'Our team will verify your business credentials within 48 hours.',
              icon: ShieldCheck
            },
            {
              step: 3,
              title: 'Onboarding',
              description: 'Receive your credentials and access to your personalized back office.',
              icon: Building
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-auto h-12 bg-primary-500 rounded-full px-4 text-white font-bold">
                    <span className="text-lg">Step {item.step}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-500" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-600 mb-2">{item.title}</h3>
                <p className="text-primary-500/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Back Office Features with improved styling */}
      <section className="py-16 px-6 mb-20 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">Your Back Office</h2>
            <p className="text-center text-primary-500/80 mb-10 max-w-3xl mx-auto">
              Powerful tools designed to help you manage your clients, track performance, and grow your business.
            </p>
          </motion.div>

          {/* Navigation Tabs with improved styling */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {backOfficeImages.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id 
                    ? 'bg-primary-500 text-white shadow-md' 
                    : 'bg-white text-primary-500 hover:bg-primary-100 shadow-sm'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Featured Section with Image */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {backOfficeImages.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSection === item.id ? 1 : 0,
                  display: activeSection === item.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-4">{item.title}</h3>
                    <p className="text-primary-500/80 mb-8">{item.description}</p>
                    
                    <div className="bg-primary-50 p-6 rounded-xl shadow-sm border border-primary-100">
                      <h4 className="text-lg font-semibold text-primary-500 mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="bg-primary-100 p-1 rounded-full mt-0.5">
                              <Check className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="text-primary-500/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/0 rounded-2xl transform rotate-1"></div>
                    <div className="relative z-10 border border-primary-100 rounded-2xl shadow-xl overflow-hidden">
                      {/* Fallback text in case image doesn't load */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-primary-400">
                        <div className="text-lg font-semibold mb-2">{item.title}</div>
                        <div className="text-sm opacity-80">Interface Preview</div>
                      </div>
                      
                      {/* This uses the imported images from the screenshots shared in the user query */}
                      {item.id === 'dashboard' && (
                        <img 
                          src={Dashboard}
                          alt={item.title}
                          className="w-full relative z-10"
                        />
                      )}
                      {item.id === 'performance' && (
                        <img 
                          src={Performance}
                          alt={item.title}
                          className="w-full relative z-10"
                        />
                      )}
                      {item.id === 'tourists' && (
                        <img 
                          src={Tourists}
                          alt={item.title}
                          className="w-full relative z-10"
                        />
                      )}
                      {item.id === 'invoices' && (
                        <img 
                          src={Invoices} 
                          alt={item.title}
                          className="w-full relative z-10"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section with improved styling */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">Partner Benefits</h2>
          <p className="text-primary-500/80 max-w-3xl mx-auto">
            Exclusive advantages designed to help your business thrive and connect with more tourists.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Increased Visibility',
              description: 'Get featured in our app and gain exposure to thousands of tourists planning their Morocco trip.',
              icon: Award
            },
            {
              title: 'Revenue Growth',
              description: 'Earn 5% commission on all purchases made by your clients through our platform.',
              icon: Clock
            },
            {
              title: 'Client Management',
              description: 'Efficiently track and manage your clients\' activities and purchases in real-time.',
              icon: Users
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-primary-50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-full flex items-center justify-center mb-4 text-white">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary-600 mb-2">{benefit.title}</h3>
              <p className="text-primary-500/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section with improved styling */}
      <section className="py-16 px-6 mb-4 bg-primary-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary-500 p-2 rounded-full text-white">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary-600">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-primary-100"
              >
                <button
                  onClick={() => handleFaqClick(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-primary-600">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary-500 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all ${
                    openFaq === index ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-primary-500/80">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with improved form styling */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-8 shadow-lg text-white mb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to become a Business Partner?</h2>
          <p className="opacity-90">Join our network of travel agencies and start growing your business today.</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary-100">
          <h3 className="text-xl font-bold text-primary-600 mb-6">Apply as Business Partner</h3>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary-500 mb-2">Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-500 mb-2">Email *</label>
                <input 
                  type="email" 
                  required
                  className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                  placeholder="Your email address"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary-500 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary-500 mb-2">Business Name *</label>
                <input 
                  type="text" 
                  required
                  className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                  placeholder="Your business name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-primary-500 mb-2">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your business and how you'd like to partner..."
                className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
              />
            </div>
            
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full btn-primary py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all font-medium text-lg"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BusinessPartner; 