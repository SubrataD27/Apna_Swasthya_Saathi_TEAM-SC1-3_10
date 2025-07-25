import React from 'react';
import { TrendingUp, Users, Shield, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '1M+',
      label: 'ASHA Workers Empowered',
      description: 'Across rural India',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '90%',
      label: 'Faster Diagnosis',
      description: 'Time to treatment reduced',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      value: '10M+',
      label: 'Families Protected',
      description: 'Through micro-insurance',
      color: 'text-purple-600'
    },
    {
      icon: MapPin,
      value: '50%',
      label: 'Better Scheme Access',
      description: 'Increased utilization',
      color: 'text-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Impact at Scale
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our platform is transforming rural healthcare delivery across India, 
            creating measurable impact in communities that need it most.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8" />
              </div>
              
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-blue-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
            <span className="text-lg font-medium">
              "Building India's largest rural healthcare network, one ASHA at a time."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;