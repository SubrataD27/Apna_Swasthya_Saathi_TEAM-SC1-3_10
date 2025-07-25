import React, { useState } from 'react';
import ChatInterface from '../components/citizen/ChatInterface';
import FacilityLocator from '../components/citizen/FacilityLocator';
import HealthRecords from '../components/citizen/HealthRecords';
import EmergencyAlert from '../components/citizen/EmergencyAlert';
import { MessageCircle, MapPin, FileText, AlertTriangle, User } from 'lucide-react';

const CitizenDashboard = () => {
  const [activeSection, setActiveSection] = useState('chat');

  const sections = [
    { id: 'chat', name: 'Health Assistant', icon: MessageCircle },
    { id: 'locator', name: 'Find Healthcare', icon: MapPin },
    { id: 'records', name: 'My Records', icon: FileText },
    { id: 'emergency', name: 'Emergency', icon: AlertTriangle },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'chat':
        return <ChatInterface />;
      case 'locator':
        return <FacilityLocator />;
      case 'records':
        return <HealthRecords />;
      case 'emergency':
        return <EmergencyAlert />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Namaste, Ramesh</h1>
                <p className="text-sm text-gray-500">Your health companion is ready to help</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              <span className="font-medium">ABHA ID:</span> 12-3456-7890-1234
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-8 border-b border-gray-200">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <section.icon className="h-4 w-4" />
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default CitizenDashboard;