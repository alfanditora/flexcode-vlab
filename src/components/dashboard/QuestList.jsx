import React from 'react';
import { Trophy, Star, Lock } from 'lucide-react';

const QuestList = ({ quests = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quests.map((quest, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-semibold">{quest.title}</h3>
                {quest.locked && <Lock size={16} className="text-gray-400" />}
              </div>
              <p className="text-gray-600 mt-2">{quest.description}</p>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-medium">{quest.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-900 rounded-full h-2"
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
          
          <div className="mt-6">
            <button
              className={`w-full py-2 px-4 rounded-lg font-medium ${
                quest.locked
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-indigo-800 text-white hover:bg-indigo-900'
              }`}
              disabled={quest.locked}
            >
              {quest.locked ? 'Locked' : 'Start Quest'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestList;