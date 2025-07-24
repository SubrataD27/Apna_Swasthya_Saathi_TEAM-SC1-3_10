import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnose with AI',
      description: 'ASHA workers use AI-powered tools and PoC devices to screen patients for health conditions.',
      image: 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['Digital Stethoscope', 'Hemoglobin Testing', 'AI Risk Assessment']
    },
    {
      step: '02',
      title: 'Link to Schemes',
      description: 'Automatically connect patients to government health schemes like BSKY with verified eligibility.',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['BSKY Integration', 'Automated Navigation', 'Facility Mapping']
    },
    {
      step: '03',
      title: 'Insure for Future',
      description: 'Provide affordable micro-insurance options to protect families from healthcare emergencies.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      highlights: ['₹50 Premium Options', 'Instant Activation', 'Claims Support']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our three-step process ensures comprehensive healthcare delivery from diagnosis to financial protection.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  {step.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow for flow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center lg:justify-start pt-8">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <span className="text-sm font-medium">Next Step</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative z-10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-20"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;