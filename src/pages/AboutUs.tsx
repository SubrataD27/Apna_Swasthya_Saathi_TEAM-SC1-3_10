import React from 'react';
import { Heart, Users, Target, Award, Globe, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every feature is designed with empathy for rural communities and their unique healthcare challenges.'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'We believe in empowering local health workers and communities rather than replacing them with technology.'
    },
    {
      icon: Target,
      title: 'Impact-Driven',
      description: 'Our success is measured by the lives we touch and the health outcomes we improve in rural India.'
    },
    {
      icon: Award,
      title: 'Excellence in Innovation',
      description: 'We combine cutting-edge technology with grassroots wisdom to create solutions that truly work.'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former WHO consultant with 15+ years experience in rural health programs across India.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/5214477/pexels-photo-5214477.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'AI/ML expert and former Google engineer, passionate about technology for social good.'
    },
    {
      name: 'Dr. Anita Singh',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Rural health specialist with extensive field experience in tribal areas of Odisha.'
    },
    {
      name: 'Suresh Patel',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former district health official with deep understanding of government health systems.'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Building India's Rural Health Lifeline
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We are on a mission to democratize healthcare access in rural India through 
              technology that empowers communities and transforms lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-blue-100">
                A future where every rural citizen has access to quality healthcare, 
                regardless of location or economic status.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-blue-100">
                To create an integrated healthcare ecosystem that diagnoses, connects, 
                and protects rural families through technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
              <p className="text-blue-100">
                Human-centered design meets cutting-edge technology to create 
                solutions that work for real people in real situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Born from the recognition that rural India faces a quadruple burden of disease—
                infectious diseases, non-communicable diseases, malnutrition, and mental health challenges—
                Apna Swasthya Saathi emerged as a response to a fundamental question: 
                "How can technology truly serve those who need it most?"
              </p>
              <p>
                Our founders, having worked extensively in rural health programs, witnessed firsthand 
                the dedication of ASHA workers and the challenges faced by rural families in accessing 
                quality healthcare. They saw how existing solutions often created information without 
                providing actionable pathways to care.
              </p>
              <p>
                This led to the development of our unique "Diagnose → Link → Insure" model—
                a closed-loop system that doesn't just identify problems but provides comprehensive 
                solutions that address both immediate health needs and long-term financial protection.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://i.ibb.co/FkH329Nq/win.jpg"
              alt="ASHA Worker helping community"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A diverse team of healthcare professionals, technologists, and rural development experts 
            united by a common mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Growing Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Every day, we're making a difference in the lives of rural families across India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-100">ASHA Workers Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10M+</div>
              <div className="text-blue-100">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Health Screenings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a healthcare professional, technologist, or simply someone who 
            believes in equitable healthcare access, there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Join Our Team
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;