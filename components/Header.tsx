
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">IB</div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Skill Bihar</span>
            </Link>
          </div>
          
          <nav className="hidden md:ml-6 md:flex md:items-center space-x-8">
            <Link to="/academic-hub" className="text-gray-600 hover:text-indigo-600 font-medium transition">Academic Hub</Link>
            <Link to="/internships" className="text-gray-600 hover:text-indigo-600 font-medium transition">Internships</Link>
            <Link to="/notices" className="text-gray-600 hover:text-indigo-600 font-medium transition">Notices</Link>
            <Link to="/admin" className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-100 transition">Admin Login</Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/academic-hub" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Academic Hub</Link>
          <Link to="/internships" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Internships</Link>
          <Link to="/notices" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Notices</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 font-bold">Admin Login</Link>
        </div>
      )}
    </header>
  );
};
