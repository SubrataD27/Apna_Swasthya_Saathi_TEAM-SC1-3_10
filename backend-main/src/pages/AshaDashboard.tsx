import React, { useState } from 'react';
import DashboardHeader from '../components/asha/DashboardHeader';
import DashboardStats from '../components/asha/DashboardStats';
import PatientManagement from '../components/asha/PatientManagement';
import DiagnosticTools from '../components/asha/DiagnosticTools';
import GovernmentSchemes from '../components/asha/GovernmentSchemes';
import InsuranceModule from '../components/asha/InsuranceModule';

const AshaDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <PatientManagement />
              <DiagnosticTools />
            </div>
          </>
        );
      case 'patients':
        return <PatientManagement expanded />;
      case 'diagnostics':
        return <DiagnosticTools expanded />;
      case 'schemes':
        return <GovernmentSchemes />;
      case 'insurance':
        return <InsuranceModule />;
      default:
        return <DashboardStats />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default AshaDashboard;