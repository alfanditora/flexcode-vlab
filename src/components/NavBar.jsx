import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
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
    <nav className="bg-zinc-100 py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 mr-2" />
        <span className="text-indigo-950 font-bold text-xl">FlexCode</span>
      </div>
      <div className="flex items-center">
        <Link 
          to="/dashboard" 
          className="bg-zinc-300 text-red-900 font-bold py-2 px-8 rounded-md hover:bg-zinc-400 mr-6"
        >
          Home
          </Link>
        <Link 
          onClick={handleLogout} 
          to="/home"
          className="bg-red-900 text-white font-bold py-2 px-6 rounded-md hover:bg-red-950"
          >
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;