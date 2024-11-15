import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Trophy, Terminal } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">FlexCode</div>
          <div className="space-x-4">
            <Link 
              to="/login"
              className="px-4 py-2 text-white hover:text-gray-300 transition-colors"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Daftar
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-7xl font-bold text-white mb-8">
          FlexCode
        </h1>
        <p className="text-l text-gray-300 mb-12 max-w-2xl mx-auto">
          Tingkatkan kemampuan coding Anda dengan pembelajaran berbasis quest dan tantangan praktis dalam lingkungan virtual yang aman.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/register"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
          >
            Mulai Belajar
          </Link>
          <Link
            to="/login"
            className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-lg font-semibold"
          >
            Masuk ke Lab
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-indigo-500 mb-4">
              <Terminal size={40} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Virtual Lab</h3>
            <p className="text-gray-400">
              Akses lingkungan pengembangan virtual yang aman dan terstruktur untuk praktik coding.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-indigo-500 mb-4">
              <Code size={40} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Courses Interaktif</h3>
            <p className="text-gray-400">
              Pelajari coding melalui courses interaktif dengan panduan langkah demi langkah.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-indigo-500 mb-4">
              <Trophy size={40} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Quest & Rewards</h3>
            <p className="text-gray-400">
              Selesaikan quest coding dan dapatkan rewards untuk tracking progress Anda.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="text-indigo-500 mb-4">
              <BookOpen size={40} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Learning Path</h3>
            <p className="text-gray-400">
              Ikuti learning path yang terstruktur untuk menguasai skill programming.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-indigo-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap untuk Memulai Perjalanan Coding Anda?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Bergabung sekarang dan akses berbagai fitur pembelajaran interaktif kami.
          </p>
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold inline-block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="text-center text-gray-400">
          <p>© 2024 FlexCode Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;