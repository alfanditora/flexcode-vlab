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
      color: 'bg-stone-900'
    },
    {
      icon: Trophy,
      label: 'Your Achievement',
      value: defaultStats.completedQuests,
      color: 'bg-teal-950'
    },
    {
      icon: Star,
      label: 'Total Points',
      value: defaultStats.totalPoints,
      color: 'bg-red-950'
    },
    {
      icon: Timer,
      label: 'Your Level',
      value: defaultStats.hoursLearned,
      color: 'bg-zinc-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-zinc-100 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-900 text-md font-bold">{item.label}</p>
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