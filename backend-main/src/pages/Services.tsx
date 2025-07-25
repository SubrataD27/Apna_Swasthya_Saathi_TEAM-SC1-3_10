import React from 'react';
import { Stethoscope, Link2, Shield, MapPin, Brain, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'AI-Powered Health Diagnosis',
      description: 'Advanced AI-driven health screening using Point-of-Care devices for accurate diagnosis.',
      features: [
        'Digital stethoscope integration',
        'Hemoglobin level testing',
        'AI risk assessment',
        'Instant health reports'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Link2,
      title: 'Government Scheme Linking',
      description: 'Seamless connection to government health schemes with automated eligibility verification.',
      features: [
        'BSKY scheme integration',
        'Automatic eligibility check',
        'Hospital navigation',
        'Paperwork assistance'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Micro Insurance Coverage',
      description: 'Affordable insurance products designed specifically for rural families.',
      features: [
        'Premium starting at ₹50',
        'Instant policy activation',
        'Claims support',
        'Family coverage options'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Healthcare Facility Locator',
      description: 'Find nearest healthcare facilities with real-time information and directions.',
      features: [
        'GPS-based location finder',
        'Real-time facility information',
        'BSKY empanelled hospitals',
        'Emergency service locations'
      ],
      color: 'bg-purple-500'
    },
    {
      icon: Brain,
      title: 'Smart Health Assistant',
      description: 'AI-powered chatbot providing 24/7 health guidance in local languages.',
      features: [
        'Voice interaction support',
        'Multi-language support',
        'Symptom assessment',
        '24/7 availability'
      ],
      color: 'bg-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Offline-First Platform',
      description: 'Works seamlessly without internet connectivity, ensuring rural accessibility.',
      features: [
        'Works without internet',
        'Automatic data sync',
        'Local data storage',
        'Battery optimized'
      ],
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover how our integrated platform transforms rural healthcare delivery through 
            cutting-edge technology and grassroots empowerment.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              {/* Icon and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 ${service.color} rounded-full`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integration Ecosystem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform integrates with leading healthcare providers and government systems 
              to ensure comprehensive care delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=100" alt="ABDM" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ABDM Integration</h3>
              <p className="text-gray-600">
                Fully compliant with Ayushman Bharat Digital Mission for national interoperability.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Medical Devices" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Devices</h3>
              <p className="text-gray-600">
                Integration with validated Point-of-Care devices for accurate diagnostics.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=100" alt="Government Systems" className="w-12 h-12 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Government Systems</h3>
              <p className="text-gray-600">
                Direct integration with BSKY and other state health schemes for seamless access.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience These Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of ASHA workers and citizens who are already transforming 
            rural healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Start as Citizen
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Join as ASHA Worker
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;