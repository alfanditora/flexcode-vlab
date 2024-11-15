import React from 'react';
import StatsOverview from '../components/dashboard/StatsOverview';
import CourseList from '../components/dashboard/CourseList';
import QuestList from '../components/dashboard/QuestList';
import Leaderboard from '../components/dashboard/Leaderboard';
import { useAuth } from '../contexts/AuthContext';
import Avatar from '../components/Avatar';
import Navbar from '../components/NavBar';

const DashboardOverview = () => {
  const { currentUser } = useAuth();

  const stats = {
    completedCourses: 5,
    completedQuests: 12,
    totalPoints: 2500,
    hoursLearned: 45
  };

  const courses = [
    {
      title: "Python Fundamentals",
      description: "Learn the basics of Python programming language",
      level: "Beginner",
      duration: "15m",
      lessons: 12
    },
    {
      title: "Web Development with React",
      description: "Master modern web development using React",
      level: "Intermediate",
      duration: "15m",
      lessons: 15
    },
    {
      title: "Data Structures & Algorithms",
      description: "Advanced concepts in DSA",
      level: "Advanced",
      duration: "25m",
      lessons: 20
    },
    {
      title: "Data Structures & Algorithms",
      description: "Advanced concepts in DSA",
      level: "Advanced",
      duration: "25m",
      lessons: 20
    }
  ];

  const quests = [
    {
      title: "Python Challenge",
      description: "Complete 5 Python coding challenges",
      progress: 60,
      xp: 500,
      rewards: 100,
      locked: false
    },
    {
      title: "React Master",
      description: "Build a complete React application",
      progress: 30,
      xp: 750,
      rewards: 150,
      locked: false
    }
  ];

  const leaderboardUsers = [
    {
      id: 1,
      name: "John Doe",
      level: "Level 15",
      points: 5200,
      completedQuests: 25
    },
    {
      id: 2,
      name: "Jane Smith",
      level: "Level 12",
      points: 4800,
      completedQuests: 22
    },
    {
      id: 3,
      name: "Alex Johnson",
      level: "Level 10",
      points: 4200,
      completedQuests: 20
    },
    {
      id: 4,
      name: "Akangn",
      level: "Level 10",
      points: 4100,
      completedQuests: 20
    }
  ];

  return (
    <div>
    <Navbar />
    <div className="mt-20 p-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8">
          <Avatar email={currentUser?.email} size="lg" />
  
          <h1 className="text-4xl font-bold">
            Welcome, {currentUser?.email.split('@')[0]}!
          </h1>
  
          <p className="text-l text-gray-500">
            Your personal dashboard to track progress, complete quests, and view courses.
          </p>
        </div>
        <StatsOverview stats={stats} />
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
              <CourseList courses={courses} />
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-4">Quests</h2>
              <QuestList quests={quests} />
            </div>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
            <Leaderboard users={leaderboardUsers} />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DashboardOverview