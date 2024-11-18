import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Trophy, Terminal } from 'lucide-react';
import logo from '../assets/logo.png';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-200">
      {/* Navigation */}
      <nav className="py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <span className="text-indigo-950 font-bold text-xl">FlexCode</span>
        </div>
        <div className="flex items-center">
          <Link 
            to="/login" 
            className="bg-zinc-300 text-red-900 font-bold py-2 px-8 rounded-md hover:bg-zinc-400 mr-6"
          >
            Masuk
            </Link>
          <Link 
            to="/register"
            className="bg-red-900 text-white font-bold py-2 px-6 rounded-md hover:bg-red-950"
          >
            Daftar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl font-bold text-stone-900 mb-8">
          FlexCode
        </h1>
        <p className="text-xl text-stone-900 mb-12 max-w-2xl mx-auto">
          Tingkatkan kemampuan coding Anda dengan pembelajaran berbasis quest dan tantangan praktis dalam lingkungan virtual yang aman.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="px-8 py-4 bg-red-900 text-white rounded-lg hover:bg-red-950 transition-colors text-lg font-semibold"
          >
            Mulai Belajar
          </Link>
          <Link
            to="/login"
            className="px-8 py-4 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700 transition-colors text-lg font-semibold"
          >
            Masuk ke Lab
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-zinc-300 p-6 rounded-lg">
            <div className="text-stone-900 mb-4">
              <Terminal size={40} />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">Virtual Lab</h3>
            <p className="text-stone-900">
              Akses lingkungan pengembangan virtual yang aman dan terstruktur untuk praktik coding.
            </p>
          </div>
          
          <div className="bg-zinc-300 p-6 rounded-lg">
            <div className="text-stone-900 mb-4">
              <Code size={40} />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">Courses Interaktif</h3>
            <p className="text-stone-900">
              Pelajari coding melalui courses interaktif dengan panduan langkah demi langkah.
            </p>
          </div>

          <div className="bg-zinc-300 p-6 rounded-lg">
            <div className="text-stone-900 mb-4">
              <Trophy size={40} />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">Quest & Rewards</h3>
            <p className="text-stone-900">
              Selesaikan quest coding dan dapatkan rewards untuk tracking progress Anda.
            </p>
          </div>

          <div className="bg-zinc-300 p-6 rounded-lg">
            <div className="text-stone-900 mb-4">
              <BookOpen size={40} />
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">Learning Path</h3>
            <p className="text-stone-900">
              Ikuti learning path yang terstruktur untuk menguasai skill programming.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-teal-950 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap untuk Memulai Perjalanan Coding Anda?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Bergabung sekarang dan akses berbagai fitur pembelajaran interaktif kami.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-teal-950 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="text-center text-red-900">
          <p>© 2024 FlexCode Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;