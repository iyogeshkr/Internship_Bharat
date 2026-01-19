import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-12 sm:py-20 md:py-24 lg:py-32">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                {/* Skill Bihar Digital Bodhi Tree Logo */}
                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 85V60M50 60C40 60 30 50 30 40C30 30 40 20 50 20C60 20 70 30 70 40C70 50 60 60 50 60Z" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="50" cy="20" r="5" fill="#06B6D4"/>
                  <circle cx="30" cy="40" r="5" fill="#06B6D4"/>
                  <circle cx="70" cy="40" r="5" fill="#06B6D4"/>
                  <path d="M45 40H55M50 35V45" stroke="#4F46E5" strokeWidth="2"/>
                  <path d="M42 75C42 75 45 70 50 70C55 70 58 75 58 75L50 85L42 75Z" fill="#4F46E5"/>
                </svg>
                <span className="text-2xl font-black tracking-tighter text-gray-900">SKILL BIHAR</span>
              </div>

              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                <span className="block xl:inline">Empowering Bihar's</span>{' '}
                <span className="block text-indigo-600 xl:inline">Technical Talent</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                The centralized hub for B.Tech and Polytechnic students. Access verified study materials, internship opportunities, and real-time updates from BEU & SBTE.
              </p>
              
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/academic-hub?stream=Polytechnic')}
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1"
                >
                  POLYTECHNIC HUB
                </button>
                <button
                  onClick={() => navigate('/academic-hub?stream=B.Tech')}
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8
