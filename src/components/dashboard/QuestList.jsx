import React from 'react';
import { Trophy, Star, Lock } from 'lucide-react';

const QuestList = ({ quests = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quests.map((quest, index) => (
        <div key={index} className="bg-zinc-100 rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold text-red-900">{quest.title}</h3>
              </div>
              <p className="text-gray-600 mt-2">{quest.description}</p>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-900">Progress</span>
                  <span className="font-medium">{quest.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-900 rounded-full h-2"
                    style={{ width: `${quest.progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <Trophy className="text-yellow-500" size={20} />
                    <span className="text-gray-600">{quest.xp} XP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500" size={20} />
                    <span className="text-gray-600">{quest.rewards} Points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestList;