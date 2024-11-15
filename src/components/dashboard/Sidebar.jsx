import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Layout, 
  Home, 
  BookOpen, 
  Trophy, 
  Award,
  User,
  LogOut
} from 'lucide-react';
import { auth } from '../../services/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Overview' },
    { path: '/dashboard/courses', icon: BookOpen, label: 'Courses' },
    { path: '/dashboard/quests', icon: Trophy, label: 'Quests' },
    { path: '/dashboard/leaderboard', icon: Award, label: 'Leaderboard' },
    { path: '/dashboard/profile', icon: User, label: 'Profile' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 min-h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <Layout className="text-indigo-500" />
          <span className="text-white text-xl font-bold">FlexCode Lab</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActivePath(item.path)
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;