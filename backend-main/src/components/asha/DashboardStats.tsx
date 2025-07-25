import React from 'react';
import { Users, TrendingUp, Calendar, Award } from 'lucide-react';

const DashboardStats = () => {
  const stats = [
    {
      name: 'Patients Screened Today',
      value: '12',
      change: '+3 from yesterday',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'BSKY Referrals This Week',
      value: '8',
      change: '+2 from last week',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      name: 'Insurance Enrollments',
      value: '24',
      change: '+5 this month',
      changeType: 'increase',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      name: 'Community Trust Score',
      value: '98%',
      change: 'Excellent rating',
      changeType: 'neutral',
      icon: Award,
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white overflow-hidden shadow rounded-xl">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className={`inline-flex items-center justify-center p-3 ${stat.color} rounded-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="mt-4">
                <span className={`text-sm ${
                  stat.changeType === 'increase' ? 'text-green-600' : 
                  stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;