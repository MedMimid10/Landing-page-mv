import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import React, { useState } from 'react';
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
      "Offline maps",
      "Audio guides",
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
  const [formStage, setFormStage] = useState<"plan" | "contact">("plan");
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
    setFormStage("plan");
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
                  setFormStage("plan");
                }}
                className={`w-40 py-3 rounded-full transition-all font-medium text-center ${
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
          key={`${selectedPlan}-${formStage}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
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
              {formStage === "plan" ? (
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
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => setFormStage("contact")}
                      className="w-full btn-primary bg-primary-500 text-white flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-primary-600 transition-all"
                    >
                      <span>Request {currentPlan.name} Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
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
                          className="w-full rounded-lg border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20" 
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
                          className="w-full rounded-lg border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20" 
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
                          className="w-full rounded-lg border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20" 
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
                            className="w-full rounded-lg border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20" 
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
                        className="w-full rounded-lg border-primary-200 focus:border-primary-500 focus:ring focus:ring-primary-500/20" 
                      />
                    </div>
                    
                    <div className="flex gap-4 pt-2">
                      <button 
                        type="button" 
                        onClick={() => setFormStage("plan")}
                        className="flex-1 py-3 rounded-lg border border-primary-200 text-primary-500 hover:bg-primary-50 transition-all"
                      >
                        Back to Plan
                      </button>
                      <button 
                        type="submit" 
                        className="flex-1 btn-primary py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-all"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;