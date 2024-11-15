import React from 'react';
import { BookOpen, Trophy, Star, Timer } from 'lucide-react';

const StatsOverview = ({ stats }) => {
  const defaultStats = {
    completedCourses: 0,
    completedQuests: 0,
    totalPoints: 0,
    hoursLearned: 0,
    ...stats
  };

  const statItems = [
    {
      icon: BookOpen,
      label: 'Courses Completed',
      value: defaultStats.completedCourses,
      color: 'bg-blue-500'
    },
    {
      icon: Trophy,
      label: 'Quests Completed',
      value: defaultStats.completedQuests,
      color: 'bg-green-500'
    },
    {
      icon: Star,
      label: 'Total Points',
      value: defaultStats.totalPoints,
      color: 'bg-yellow-500'
    },
    {
      icon: Timer,
      label: 'Hours Learned',
      value: defaultStats.hoursLearned,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-2xl font-bold mt-1">{item.value}</p>
              </div>
              <div className={`${item.color} p-3 rounded-lg`}>
                <Icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsOverview;