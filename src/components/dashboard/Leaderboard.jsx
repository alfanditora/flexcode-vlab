import React, { useState, useEffect } from 'react';
import { Trophy, Medal } from 'lucide-react';
import Avatar from '../Avatar';
import { DatabaseService } from '../../services/db';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMedalIcon = (position) => {
    switch (position) {
      case 1:
        return <Medal className="text-yellow-500" size={24} />;
      case 2:
        return <Medal className="text-gray-500" size={24} />;
      case 3:
        return <Medal className="text-orange-500" size={24} />;
      default:
        return null;
    }
  };

  const getPositionStyle = (position) => {
    switch (position) {
      case 1:
        return 'bg-yellow-50';
      case 2:
        return 'bg-gray-50';
      case 3:
        return 'bg-orange-50';
      default:
        return '';
    }
  };

  const fetchLeaderboardData = async () => {
    try {
      setLoading(true);

      const usersSnapshot = await DatabaseService.getAllUsersProgress();

      const leaderboard = usersSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || 'Anonymous User',
          level: `Level ${Math.floor(data.totalPoints / 1000)}`,
          points: data.totalPoints || 0,
          completedQuests: data.questsCompleted || 0
        };
      });

      const sortedLeaderboard = leaderboard.sort((a, b) => b.points - a.points);

      setLeaderboardData(sortedLeaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-center">Loading leaderboard...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 bg-indigo-900 flex items-center space-x-2">
        <Trophy className="text-yellow-500" size={24} />
        <h2 className="text-xl font-semibold text-white">Top performers</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {leaderboardData.slice(0, 10).map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center justify-between p-4 ${getPositionStyle(
              index + 1
            )}`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 text-center font-bold">
                {getMedalIcon(index + 1) || `#${index + 1}`}
              </div>
              <Avatar email={user.name} size="sm" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.level}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">{user.points.toLocaleString()} pts</p>
              <p className="text-sm text-gray-500">
                {user.completedQuests} quests
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;