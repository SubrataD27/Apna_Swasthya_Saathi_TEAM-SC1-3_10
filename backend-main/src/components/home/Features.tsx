import React from 'react';
import { Stethoscope, Link2, Shield, MapPin, Brain, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Stethoscope,
      title: 'AI-Powered Diagnosis',
      description: 'Advanced AI triage with integrated Point-of-Care devices for accurate health screening.',
      color: 'bg-red-500',
    },
    {
      icon: Link2,
      title: 'Government Scheme Linking',
      description: 'Seamless connection to BSKY and other welfare schemes with automated eligibility checking.',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Micro Insurance',
      description: 'Affordable insurance products starting at ₹50 premium with instant policy activation.',
      color: 'bg-blue-500',
    },
    {
      icon: MapPin,
      title: 'Facility Locator',
      description: 'GIS-powered facility finder to locate nearest PHCs, hospitals, and empanelled centers.',
      color: 'bg-purple-500',
    },
    {
      icon: Brain,
      title: 'Smart Health Assistant',
      description: 'Voice-enabled AI chatbot providing health guidance in local languages.',
      color: 'bg-teal-500',
    },
    {
      icon: Smartphone,
      title: 'Offline-First Design',
      description: 'Works seamlessly without internet connection, syncing when connectivity returns.',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Complete Healthcare Ecosystem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our integrated platform combines cutting-edge technology with ground-level healthcare delivery 
            to create a comprehensive solution for rural India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 cursor-pointer">
            Explore All Features
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;