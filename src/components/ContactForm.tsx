
import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.scroll-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.company.trim()) newErrors.company = 'Company is required';
    }

    if (step === 2) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
      if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setCurrentStep(4); // Success step

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const services = [
    'SAP Implementation',
    'Manhattan WMS',
    'Cloud Migration',
    'Custom Development',
    'Business Intelligence',
    'IT Consulting'
  ];

  const budgetRanges = [
    'Under €50K',
    '€50K - €100K',
    '€100K - €250K',
    '€250K - €500K',
    '€500K+',
    'Not Sure'
  ];

  const timelines = [
    'ASAP',
    '1-3 Months',
    '3-6 Months',
    '6-12 Months',
    '12+ Months',
    'Flexible'
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="scroll-section">
            <div className="flex justify-center mb-6">
              <img 
                src="/logo.png" 
                alt="TAZO Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Start Your <span className="text-primary">Digital Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our enterprise solution experts 
              and discover how TAZO BV can accelerate your success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="scroll-section">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 sticky top-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  {/* Contact information removed */}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h4 className="text-white font-medium mb-4">Why Choose TAZO BV?</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      15+ years of enterprise experience
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      Certified SAP & Manhattan partners
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      24/7 support & maintenance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      Proven ROI & business value
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Multi-step Form */}
          <div className="lg:col-span-2">
            <div className="scroll-section">
              <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((step) => (
                      <div
                        key={step}
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-primary border-primary text-white'
                            : 'border-gray-600 text-gray-400'
                        }`}
                      >
                        {currentStep > step ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          step
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Contact Info</span>
                    <span>Project Details</span>
                    <span>Budget & Timeline</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <div className="animate-fade-in-up space-y-6">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Tell us about yourself
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all duration-300 text-white ${
                              errors.name ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                            }`}
                            placeholder="John Doe"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all duration-300 text-white ${
                              errors.email ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all duration-300 text-white ${
                              errors.company ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                            }`}
                            placeholder="Your Company"
                          />
                          {errors.company && (
                            <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.company}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all duration-300 text-white"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                        >
                          Next Step
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <div className="animate-fade-in-up space-y-6">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Tell us about your project
                      </h3>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Service Type *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleInputChange('serviceType', service)}
                              className={`p-3 rounded-lg border text-sm transition-all duration-300 ${
                                formData.serviceType === service
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-background text-gray-300 border-gray-600 hover:border-primary/50'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                        {errors.serviceType && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.serviceType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Project Details *
                        </label>
                        <textarea
                          value={formData.projectDetails}
                          onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                          rows={4}
                          className={`w-full px-4 py-3 bg-background border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all duration-300 text-white resize-none ${
                            errors.projectDetails ? 'border-red-500' : 'border-gray-600 focus:border-primary'
                          }`}
                          placeholder="Describe your project requirements, challenges, and goals..."
                        />
                        {errors.projectDetails && (
                          <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.projectDetails}
                          </p>
                        )}
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-primary/50 transition-all duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
                        >
                          Next Step
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Budget & Timeline */}
                  {currentStep === 3 && (
                    <div className="animate-fade-in-up space-y-6">
                      <h3 className="text-xl font-semibold text-white mb-6">
                        Budget and timeline
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Budget Range
                          </label>
                          <div className="space-y-2">
                            {budgetRanges.map((budget) => (
                              <button
                                key={budget}
                                type="button"
                                onClick={() => handleInputChange('budget', budget)}
                                className={`w-full p-3 rounded-lg border text-sm transition-all duration-300 text-left ${
                                  formData.budget === budget
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-background text-gray-300 border-gray-600 hover:border-primary/50'
                                }`}
                              >
                                {budget}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <div className="space-y-2">
                            {timelines.map((timeline) => (
                              <button
                                key={timeline}
                                type="button"
                                onClick={() => handleInputChange('timeline', timeline)}
                                className={`w-full p-3 rounded-lg border text-sm transition-all duration-300 text-left ${
                                  formData.timeline === timeline
                                    ? 'bg-accent text-black border-accent'
                                    : 'bg-background text-gray-300 border-gray-600 hover:border-accent/50'
                                }`}
                              >
                                {timeline}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                          className="mt-1 w-4 h-4 text-primary bg-background border-gray-600 rounded focus:ring-primary"
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-300">
                          Subscribe to our newsletter for enterprise solution insights and updates
                        </label>
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-primary/50 transition-all duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="magnetic-button bg-accent hover:bg-accent/90 text-black px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                    Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Success */}
                  {currentStep === 4 && (
                    <div className="animate-scale-in text-center py-12">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300 mb-8 max-w-md mx-auto">
                        Thank you for reaching out. Our enterprise solutions team will review your 
                        requirements and get back to you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentStep(1);
                          setFormData({
                            name: '', email: '', company: '', phone: '',
                            serviceType: '', projectDetails: '', budget: '', timeline: '', newsletter: false
                          });
                        }}
                        className="magnetic-button bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
