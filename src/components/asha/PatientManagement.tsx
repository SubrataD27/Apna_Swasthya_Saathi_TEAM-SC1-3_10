import React, { useState } from 'react';
import { Plus, Search, Filter, Eye, Edit, UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';

interface PatientManagementProps {
  expanded?: boolean;
}

const PatientManagement: React.FC<PatientManagementProps> = ({ expanded = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const patients = [
    {
      id: 1,
      name: 'Sunita Devi',
      age: 28,
      village: 'Kendrapara',
      lastVisit: '2024-01-15',
      condition: 'Anemia',
      status: 'High Risk',
      abhaId: 'ABHA-1234567890'
    },
    {
      id: 2,
      name: 'Ramesh Kumar',
      age: 45,
      village: 'Bhadrak',
      lastVisit: '2024-01-14',
      condition: 'Hypertension',
      status: 'Medium Risk',
      abhaId: 'ABHA-0987654321'
    },
    {
      id: 3,
      name: 'Kavita Singh',
      age: 32,
      village: 'Puri',
      lastVisit: '2024-01-13',
      condition: 'Diabetes',
      status: 'Low Risk',
      abhaId: 'ABHA-1122334455'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'High Risk': return 'bg-red-100 text-red-800';
      case 'Medium Risk': return 'bg-yellow-100 text-yellow-800';
      case 'Low Risk': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddPatient = () => {
    toast.success('New patient registration started');
  };

  const handleViewPatient = (patientName: string) => {
    toast.success(`Opening ${patientName}'s profile`);
  };

  return (
    <div className="bg-white shadow rounded-xl">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Patient Management</h3>
          <button
            onClick={handleAddPatient}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Patient
          </button>
        </div>

        {expanded && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Patients</option>
              <option value="high-risk">High Risk</option>
              <option value="medium-risk">Medium Risk</option>
              <option value="low-risk">Low Risk</option>
            </select>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Condition
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                    <div className="text-sm text-gray-500">Age: {patient.age} | ABHA: {patient.abhaId}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.village}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.condition}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {patient.lastVisit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleViewPatient(patient.name)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!expanded && (
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View all patients →
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientManagement;