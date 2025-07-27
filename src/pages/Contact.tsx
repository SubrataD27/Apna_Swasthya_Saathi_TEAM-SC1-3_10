import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Heart } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: 'citizen'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      userType: 'citizen'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+91 9XXXX XXXXX',
      description: 'Available 24/7 for emergencies',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@apnaswasthyasaathi.com',
      description: 'Response within 24 hours',
      color: 'bg-blue-500'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      details: 'Bhubaneswar, Odisha',
      description: 'India - 751001',
      color: 'bg-purple-500'
    }
  ];

  const supportTypes = [
    {
      icon: Users,
      title: 'ASHA Worker Support',
      description: 'Technical assistance, training resources, and field support for healthcare workers.',
      contact: 'asha-support@apnaswasthyasaathi.com'
    },
    {
      icon: Heart,
      title: 'Citizen Support',
      description: 'Help with app usage, health queries, and accessing healthcare services.',
      contact: 'citizen-support@apnaswasthyasaathi.com'
    },
    {
      icon: MessageCircle,
      title: 'Partnership Inquiries',
      description: 'Collaboration opportunities with healthcare organizations and government bodies.',
      contact: 'partnerships@apnaswasthyasaathi.com'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help you navigate your healthcare journey. Reach out to us 
            for support, partnerships, or any questions about our services.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-lg font-medium text-blue-600 mb-1">{info.details}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a *
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="citizen">Citizen</option>
                    <option value="asha">ASHA Worker</option>
                    <option value="doctor">Healthcare Professional</option>
                    <option value="official">Government Official</option>
                    <option value="partner">Potential Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Support Types */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Categories</h2>
            
            {supportTypes.map((support, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <support.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{support.title}</h3>
                    <p className="text-gray-600 mb-3">{support.description}</p>
                    <a
                      href={`mailto:${support.contact}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      {support.contact}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Support</h3>
              <p className="text-red-700 mb-3">
                For urgent health emergencies, please call 108 immediately or contact your nearest healthcare facility.
              </p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Call 108
                </button>
                <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  Find Hospital
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-lg text-gray-600">
              We have presence across key locations to better serve rural communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Headquarters</h3>
              <div className="space-y-2 text-gray-600">
                <p>Technology Hub</p>
                <p>Bhubaneswar, Odisha 751001</p>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Field Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>Rural Operations Center</p>
                <p>Koraput, Odisha 764020</p>
                <p>+91 9876543211</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Center</h3>
              <div className="space-y-2 text-gray-600">
                <p>ASHA Training Facility</p>
                <p>Jeypore, Odisha 764001</p>
                <p>+91 9876543212</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I register as an ASHA worker?</h3>
              <p className="text-gray-600">Contact your District Health Mission or reach out to us directly for registration and training details.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the app available in local languages?</h3>
              <p className="text-gray-600">Yes, our app supports Odia, Hindi, and English with voice interaction capabilities.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How secure is my health data?</h3>
              <p className="text-gray-600">We follow ABDM standards and DPDPA compliance for complete data security and privacy.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Does the app work without internet?</h3>
              <p className="text-gray-600">Yes, our offline-first design ensures full functionality even without internet connectivity.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I access government health schemes?</h3>
              <p className="text-gray-600">Our app automatically checks your eligibility and guides you to the nearest empanelled facilities.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the cost of micro-insurance?</h3>
              <p className="text-gray-600">Our insurance products start from just ₹50 per month with coverage up to ₹25,000.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;