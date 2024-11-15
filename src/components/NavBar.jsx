import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/home');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-indigo-950 py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-2" />
        <span className="text-white font-bold text-xl">FlexCode</span>
      </div>
      <div className="flex items-center">
        <a href="/dashboard" className="text-white font-medium mr-4">
          Home
        </a>
        <button onClick={handleLogout} className="bg-white text-blue-500 font-medium py-2 px-4 rounded-md hover:bg-gray-200">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;