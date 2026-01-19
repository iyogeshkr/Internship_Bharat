
import React, { useState } from 'react';
import { MOCK_INTERNSHIPS } from '../data';
import { Internship } from '../types';

export const InternshipPortal: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Online' | 'Offline'>('All');

  const filteredInternships = MOCK_INTERNSHIPS.filter(i => 
    i.status === 'Approved' && (filter === 'All' || i.type === filter)
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Internship Bharat</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Verified professional opportunities for engineering students in Bihar.</p>
          <div className="mt-8 inline-flex p-1 bg-white/10 backdrop-blur-sm rounded-xl">
             {['All', 'Online', 'Offline'].map(f => (
               <button 
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition ${filter === f ? 'bg-white text-indigo-700 shadow-lg' : 'hover:bg-white/10'}`}
               >
                 {f}
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map(internship => (
            <div key={internship.id} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4">
                 <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${internship.fee.includes('Free') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {internship.fee}
                 </span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-bold text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                   {internship.company.charAt(0)}
                 </div>
                 <div>
                    <h3 className="font-bold text-slate-900 leading-tight">{internship.title}</h3>
                    <p className="text-sm text-slate-400">{internship.company}</p>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Location</span>
                    <span className="text-sm font-medium text-slate-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        {internship.location}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-300 uppercase">Duration</span>
                    <span className="text-sm font-medium text-slate-600 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        {internship.duration}
                    </span>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs text-slate-400">Posted on {internship.postedAt}</span>
                <a 
                  href={internship.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition transform group-hover:scale-105"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to post an internship?</h2>
                <p className="text-slate-500 mb-6 leading-relaxed">Companies can reach out to talented engineering students from all over Bihar. Submit your details for verification and get listed.</p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition">Post Internship</button>
                    <button className="text-indigo-600 font-bold px-8 py-3 rounded-xl border border-indigo-100 hover:bg-indigo-50 transition">Partner With Us</button>
                </div>
            </div>
            <div className="md:w-1/3">
                <img src="https://picsum.photos/400/300?business" className="rounded-2xl shadow-lg" alt="Partner" />
            </div>
        </div>
      </div>
    </div>
  );
};
