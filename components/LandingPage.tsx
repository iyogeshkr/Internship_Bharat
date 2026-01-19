import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white">
      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content: Text & Branding */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs font-bold text-indigo-700 tracking-wider uppercase">Official Student Hub</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Skill <span className="text-indigo-600">Bihar</span>
            </h1>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-700">
              Empowering Technical Education
            </h2>
            
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The centralized destination for **B.Tech & Polytechnic** students. 
              Get verified study materials, internship alerts, and official updates from **BEU & SBTE** in one place.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => navigate('/academic-hub?stream=B.Tech')}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                B.TECH HUB
              </button>
              <button
                onClick={() => navigate('/academic-hub?stream=Polytechnic')}
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl border-2 border-indigo-50 shadow-sm hover:bg-indigo-50 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                POLYTECHNIC HUB
              </button>
            </div>

            {/* Student Stats */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    className="h-10 w-10 rounded-full border-2 border-white shadow-sm" 
                    src={`https://i.pravatar.cc/100?u=skillbihar${i}`} 
                    alt="user" 
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                Join <span className="text-indigo-600 font-bold">10,000+</span> Bihar engineering students
              </p>
            </div>
          </div>

          {/* Right Content: Balanced Visual */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            <div className="relative">
              {/* Decorative Background Blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
              
              {/* Main Image - Now contained, not half-screen */}
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                alt="Students studying" 
                className="relative z-10 w-full h-[300px] sm:h-[450px] object-cover rounded-[2.5rem] shadow-2xl border-8 border-white"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">BEU & SBTE</p>
                    <p className="text-sm font-black text-slate-800">Verified Updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Feature Section with skill-focused cards */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extrabold text-slate-900">Built for Bihar Students</h3>
            <p className="mt-4 text-slate-600">Resources, Updates, and Careers—all in one place.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Verified Notes" 
              desc="Handwritten notes and PYQs specifically for Bihar engineering exams." 
              icon="📚"
              color="indigo"
            />
            <FeatureCard 
              title="Internship Portal" 
              desc="Verified internships to help you gain real-world industry skills." 
              icon="💼"
              color="cyan"
            />
            <FeatureCard 
              title="Official Updates" 
              desc="Real-time alerts for result declarations and exam forms." 
              icon="🔔"
              color="rose"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for Feature Cards
const FeatureCard = ({ title, desc, icon, color }: { title: string, desc: string, icon: string, color: string }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className={`text-3xl mb-4`}>{icon}</div>
    <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);
