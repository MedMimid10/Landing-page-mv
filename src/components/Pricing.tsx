import { motion } from 'framer-motion';
import { Check, ExternalLink } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const plans = [
  {
    id: "traveler",
    name: "Traveler",
    description: "Perfect for individual travelers looking to explore Morocco.",
    price: "$20",
    period: "one-time",
    color: "from-primary-600 to-primary-800",
    features: [
      "Unlimited access to tours",
      "Customized tours",
      "Real-time translations",
      "24/7 support"
    ]
  },
  {
    id: "business",
    name: "Business Partner",
    description: "Ideal for businesses wanting to showcase their Moroccan experiences.",
    price: "Free",
    period: "to start",
    color: "from-primary-600 to-primary-800",
    features: [
      "List unlimited tours",
      "Business dashboard",
      "Analytics & insights",
      "Direct messaging",
      "Priority support"
    ]
  }
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>(plans[0].id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    message: ""
  });

  const currentPlan = plans.find(plan => plan.id === selectedPlan) || plans[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend here
    alert(`Thank you for your interest in our ${currentPlan.name} plan! We'll contact you soon.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: ""
    });
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Choose Your Plan"
          subtitle="Start your Moroccan journey today"
        />

        {/* Plan Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full inline-flex shadow-md">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedPlan(plan.id);
                }}
                className={`w-40 sm:w-60 py-3 rounded-full transition-all font-medium text-center ${
                  selectedPlan === plan.id
                    ? "bg-primary-500 text-white shadow-lg"
                    : "text-primary-500 hover:bg-primary-50"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Card with Details and Form */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${currentPlan.color} p-8 text-white`}>
              <h3 className="text-2xl font-bold mb-2">{currentPlan.name}</h3>
              <p className="opacity-90 mb-4">{currentPlan.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{currentPlan.price}</span>
                <span className="opacity-80">{currentPlan.period}</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Features */}
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-6">What's included:</h4>
                  <ul className="space-y-4 mb-8">
                    {currentPlan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-primary-500">
                        <div className="bg-primary-100 p-1 rounded-full">
                          <Check className="w-4 h-4 text-primary-500 flex-none" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Business Partner Details (only for business plan) */}
                  {selectedPlan === "business" && (
                    <div className="mt-8">
                      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 p-6 border border-primary-200 shadow-sm">
                        <h4 className="text-lg font-bold text-primary-600 mb-3">Business Partner Details</h4>
                        <p className="text-primary-600/80 mb-4">
                          View our comprehensive back office features, agency dashboard, and partner benefits.
                        </p>
                        <Link 
                          to="/business-partner" 
                          className="group flex items-center justify-between bg-primary-500 hover:bg-primary-600 text-white py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <span className="text-base font-semibold">Explore Business Partner</span>
                          <div className="bg-white/20 rounded-full p-1.5 group-hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Right Column - Contact Form */}
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-6">
                    {selectedPlan === "traveler" ? "Request Traveler Demo" : "Apply as Business Partner"}
                  </h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-500 mb-1">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your name"
                          className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-primary-500 mb-1">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Your email address"
                          className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-500 mb-1">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                        />
                      </div>
                      
                      {selectedPlan === "business" && (
                        <div>
                          <label className="block text-sm font-medium text-primary-500 mb-1">Business Name</label>
                          <input 
                            type="text" 
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="Your business name"
                            className="w-full h-12 px-4 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                          />
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-500 mb-1">Message</label>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={selectedPlan === "traveler" 
                          ? "Tell us about your travel plans..." 
                          : "Tell us about your business and how you'd like to partner..."
                        }
                        className="w-full px-4 py-3 rounded-lg border-2 border-primary-100 bg-primary-50/50 focus:border-primary-500 focus:ring focus:ring-primary-500/20 placeholder-primary-300" 
                      />
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full btn-primary py-4 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all font-medium"
                      >
                        {selectedPlan === "traveler" ? "Request Demo" : "Apply Now"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;