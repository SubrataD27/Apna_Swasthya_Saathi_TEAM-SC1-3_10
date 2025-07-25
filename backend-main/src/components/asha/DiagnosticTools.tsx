import React, { useState } from 'react';
import { Stethoscope, Droplet, Activity, Bluetooth, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface DiagnosticToolsProps {
  expanded?: boolean;
}

const DiagnosticTools: React.FC<DiagnosticToolsProps> = ({ expanded = false }) => {
  const [connectedDevices, setConnectedDevices] = useState({
    stethoscope: false,
    hemoglobin: false
  });

  const diagnosticTools = [
    {
      name: 'Digital Stethoscope',
      device: 'AyuSynk 2 Pro',
      icon: Stethoscope,
      connected: connectedDevices.stethoscope,
      color: 'bg-blue-500',
      description: 'Heart & lung sound analysis'
    },
    {
      name: 'Hemoglobin Meter',
      device: 'TrueHb Meter',
      icon: Droplet,
      connected: connectedDevices.hemoglobin,
      color: 'bg-red-500',
      description: 'Quick anemia screening'
    }
  ];

  const handleConnect = (deviceType: 'stethoscope' | 'hemoglobin') => {
    // Simulate Bluetooth connection
    toast.loading('Connecting to device...', { duration: 2000 });
    
    setTimeout(() => {
      setConnectedDevices(prev => ({ ...prev, [deviceType]: true }));
      toast.success('Device connected successfully!');
    }, 2000);
  };

  const handleStartDiagnosis = (toolName: string) => {
    toast.success(`Starting ${toolName} diagnosis...`);
  };

  return (
    <div className="bg-white shadow rounded-xl">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Diagnostic Tools</h3>
        <p className="text-sm text-gray-600 mt-1">Connected Point-of-Care devices</p>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {diagnosticTools.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${tool.color} rounded-lg`}>
                    <tool.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{tool.name}</h4>
                    <p className="text-sm text-gray-500">{tool.device}</p>
                    <p className="text-xs text-gray-400">{tool.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {tool.connected ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">Connected</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConnect(index === 0 ? 'stethoscope' : 'hemoglobin')}
                      className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                    >
                      <Bluetooth className="h-4 w-4" />
                      <span className="text-sm">Connect</span>
                    </button>
                  )}
                </div>
              </div>

              {tool.connected && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleStartDiagnosis(tool.name)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200"
                  >
                    Start Diagnosis
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {expanded && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="text-sm font-medium text-blue-900 mb-2">Recent Diagnoses</h4>
            <div className="space-y-2">
              <div className="text-sm text-blue-800">
                <span className="font-medium">Sunita Devi:</span> Hemoglobin 7.2 g/dL (High Risk)
              </div>
              <div className="text-sm text-blue-800">
                <span className="font-medium">Ramesh Kumar:</span> Heart rate irregular, referral made
              </div>
              <div className="text-sm text-blue-800">
                <span className="font-medium">Kavita Singh:</span> Normal lung sounds, cleared
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosticTools;