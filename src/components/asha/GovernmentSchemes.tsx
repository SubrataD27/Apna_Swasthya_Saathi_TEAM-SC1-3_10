import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Clock, MapPin, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

const GovernmentSchemes = () => {
  const [selectedScheme, setSelectedScheme] = useState('bsky');

  const schemes = {
    bsky: {
      name: 'Biju Swasthya Kalyan Yojana (BSKY)',
      description: 'Comprehensive health coverage for all families',
      coverage: '₹5,00,000 per family per year',
      eligibility: 'All families covered under NFSA/SFSS',
      features: [
        'Cashless treatment at empanelled hospitals',
        'Pre and post hospitalization coverage',
        'Day care procedures included',
        'Women and children get additional benefits'
      ]
    },
    niramaya: {
      name: 'NIRAMAYA Scheme',
      description: 'Free medicines for common ailments',
      coverage: 'Free essential medicines',
      eligibility: 'All citizens at PHCs and CHCs',
      features: [
        'Essential medicines available free',
        'Covers 348 generic medicines',
        'Available at all government facilities',
        'No income or category restrictions'
      ]
    }
  };

  const recentReferrals = [
    {
      patient: 'Sunita Devi',
      scheme: 'BSKY',
      hospital: 'District Hospital, Koraput',
      status: 'Admitted',
      date: '2024-01-15'
    },
    {
      patient: 'Ramesh Kumar',
      scheme: 'BSKY',
      hospital: 'SCB Medical College',
      status: 'Referred',
      date: '2024-01-14'
    },
    {
      patient: 'Kavita Singh',
      scheme: 'NIRAMAYA',
      hospital: 'PHC Jeypore',
      status: 'Medicine Provided',
      date: '2024-01-13'
    }
  ];

  const handleCheckEligibility = () => {
    toast.success('Checking eligibility... Patient is eligible for BSKY!');
  };

  const handleFindHospital = () => {
    toast.success('Finding nearest empanelled hospitals...');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Admitted': return 'text-green-600';
      case 'Referred': return 'text-blue-600';
      case 'Medicine Provided': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Scheme Selection */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Government Health Schemes</h3>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedScheme('bsky')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedScheme === 'bsky'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            BSKY
          </button>
          <button
            onClick={() => setSelectedScheme('niramaya')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedScheme === 'niramaya'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            NIRAMAYA
          </button>
        </div>

        {/* Scheme Details */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {schemes[selectedScheme].name}
          </h4>
          <p className="text-gray-600 mb-4">{schemes[selectedScheme].description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Coverage:</span>
              <p className="text-sm text-gray-900">{schemes[selectedScheme].coverage}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Eligibility:</span>
              <p className="text-sm text-gray-900">{schemes[selectedScheme].eligibility}</p>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 mb-2 block">Key Features:</span>
            <ul className="space-y-1">
              {schemes[selectedScheme].features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleCheckEligibility}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Check Eligibility</span>
            </button>
            <button
              onClick={handleFindHospital}
              className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Find Hospitals</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div className="bg-white shadow rounded-xl">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Scheme Referrals</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scheme
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hospital/Center
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentReferrals.map((referral, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {referral.patient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {referral.scheme}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {referral.hospital}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getStatusColor(referral.status)}`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {referral.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GovernmentSchemes;