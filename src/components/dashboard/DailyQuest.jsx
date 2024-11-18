import React, { useState } from 'react';

const DailyQuest = () => {
  const [completedQuests, setCompletedQuests] = useState({
    login: false,
    course: false,
    quest: false
  });

  const quests = [
    {
      id: 'login',
      title: 'Login to FlexCode',
      points: 50
    },
    {
      id: 'course',
      title: 'Complete a course',
      points: 150
    },
    {
      id: 'quest',
      title: 'Complete a quest',
      points: 150
    }
  ];

  const toggleQuest = (questId) => {
    setCompletedQuests(prev => ({
      ...prev,
      [questId]: !prev[questId]
    }));
  };

  return (
    <div className="bg-zinc-100 p-4 rounded-lg shadow-md overflow-hidden">
      <div className="space-y-6">
        {quests.map((quest) => (
          <div 
            key={quest.id}
            className="flex items-center justify-between cursor-pointer p-2 rounded-md transition-colors" 
            onClick={() => toggleQuest(quest.id)}
          >
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={completedQuests[quest.id]}
                  onChange={() => toggleQuest(quest.id)}
                  className="w-4 h-4 cursor-pointer border-2 border-red-300 rounded"
                />
              </div>
              <span className={`text-red-900 font-bold text-md ${completedQuests[quest.id] ? 'line-through opacity-50' : ''}`}>
                {quest.title}
              </span>
            </div>
            <span className={`text-red-900 text-md font-bold ${completedQuests[quest.id] ? 'opacity-50' : ''}`}>
              + {quest.points}pts
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyQuest;