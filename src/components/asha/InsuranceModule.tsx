import React, { useState } from 'react';
import { Shield, Plus, CreditCard, FileText, TrendingUp } from 'lucide-react';
import toast from 'react-hot-toast';

const InsuranceModule = () => {
  const [activeTab, setActiveTab] = useState('enroll');

  const insuranceProducts = [
    {
      name: 'Basic Health Cover',
      premium: '₹50/month',
      coverage: '₹5,000',
      features: ['Hospitalization coverage', 'Day care procedures', 'Ambulance charges'],
      popular: true
    },
    {
      name: 'Family Protection',
      premium: '₹120/month',
      coverage: '₹15,000',
      features: ['Family coverage (4 members)', 'Maternity benefits', 'Pre-existing conditions'],
      popular: false
    },
    {
      name: 'Critical Care',
      premium: '₹200/month',
      coverage: '₹25,000',
      features: ['Critical illness cover', 'Cancer treatment', 'Heart surgery coverage'],
      popular: false
    }
  ];

  const recentEnrollments = [
    {
      family: 'Sunita Devi Family',
      policy: 'Basic Health Cover',
      premium: '₹50',
      status: 'Active',
      enrolledDate: '2024-01-15'
    },
    {
      family: 'Ramesh Kumar Family',
      policy: 'Family Protection',
      premium: '₹120',
      status: 'Active',
      enrolledDate: '2024-01-14'
    },
    {
      family: 'Kavita Singh Family',
      policy: 'Basic Health Cover',
      premium: '₹50',
      status: 'Pending',
      enrolledDate: '2024-01-13'
    }
  ];

  const handleEnrollFamily = (productName: string) => {
    toast.success(`Starting enrollment for ${productName}...`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Expired': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white shadow rounded-xl">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('enroll')}
              className={`py-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'enroll'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Enroll Families
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`py-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'manage'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Manage Policies
            </button>
            <button
              onClick={() => setActiveTab('claims')}
              className={`py-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'claims'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Claims Support
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'enroll' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Available Insurance Products</h3>
                <p className="text-sm text-gray-600">Micro-insurance products designed for rural families</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {insuranceProducts.map((product, index) => (
                  <div
                    key={index}
                    className={`relative border rounded-xl p-6 hover:shadow-lg transition-shadow ${
                      product.popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
                    }`}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        Most Popular
                      </div>
                    )}

                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">Coverage: {product.coverage}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{product.premium}</div>
                      <div className="text-sm text-gray-500">Premium amount</div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => handleEnrollFamily(product.name)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Enroll Family
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'manage' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Recent Enrollments</h3>
                <p className="text-sm text-gray-600">Track and manage family insurance policies</p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Family
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Policy
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Premium
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Enrolled Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentEnrollments.map((enrollment, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {enrollment.family}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {enrollment.policy}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {enrollment.premium}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(enrollment.status)}`}>
                            {enrollment.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {enrollment.enrolledDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'claims' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Claims Support</h3>
                <p className="text-sm text-gray-600">Help families with insurance claims process</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-8 w-8 text-blue-600" />
                    <h4 className="text-lg font-medium text-gray-900">File New Claim</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Start a new insurance claim for a family member
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Start Claim Process
                  </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <h4 className="text-lg font-medium text-gray-900">Track Claims</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Check status of existing insurance claims
                  </p>
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View All Claims
                  </button>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-blue-900 mb-2">Claims Process Guide</h4>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>1. <strong>Immediate notification:</strong> Inform within 24 hours of hospitalization</p>
                  <p>2. <strong>Document collection:</strong> Gather all medical records and bills</p>
                  <p>3. <strong>Claim submission:</strong> Submit through the app with required documents</p>
                  <p>4. <strong>Follow-up:</strong> Track claim status and provide additional info if needed</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceModule;