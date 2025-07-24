import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Patel',
      role: 'ASHA Worker, Koraput District',
      image: 'https://i.ibb.co/Qj8xnvWf/ddd.jpg',
      quote: 'This app has transformed how I serve my community. I can now diagnose, connect to schemes, and provide insurance - all in one place. The villagers trust me more than ever.',
      rating: 5
    },
    {
      name: 'Ramesh Kumar',
      role: 'Citizen, Malkangiri',
      image: 'https://i.ibb.co/Qj8xnvWf/ddd.jpg',
      quote: 'When my wife fell ill, our ASHA didi used this app to check her immediately and connected us to BSKY. We got treatment without any paperwork hassle.',
      rating: 5
    },
    {
      name: 'Dr. Anita Singh',
      role: 'District Health Officer',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The real-time health data from this platform helps us make better policy decisions. We can see disease patterns and resource needs at the village level.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Voices from the Field
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from ASHA workers, citizens, and health officials who are experiencing 
            the transformation firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Join thousands of healthcare heroes making a difference
          </p>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 cursor-pointer">
            Become Part of the Revolution
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;