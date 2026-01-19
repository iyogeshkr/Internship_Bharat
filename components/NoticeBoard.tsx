
import React from 'react';
import { MOCK_NOTICES } from '../data';

export const NoticeBoard: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 pt-16">
        <div className="flex items-center justify-between mb-12 border-b border-slate-100 pb-8">
            <div>
                <h1 className="text-4xl font-black text-slate-900 mb-2">Notice Board</h1>
                <p className="text-slate-500 font-medium">Official updates from SBTE & BEU Bihar</p>
            </div>
            <button className="hidden sm:flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-slate-100 transition">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Subscribe to Alerts
            </button>
        </div>

        <div className="space-y-8">
          {MOCK_NOTICES.map(notice => (
            <div key={notice.id} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-slate-100 group">
              <div className="absolute left-[-4px] top-0 w-3 h-3 bg-slate-200 rounded-full border-2 border-white group-hover:bg-indigo-600 group-hover:scale-125 transition"></div>
              
              <div className="flex items-center gap-3 mb-2">
                <time className="text-sm font-bold text-indigo-600 uppercase tracking-tighter">{new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                {notice.isImportant && (
                    <span className="flex items-center gap-1 bg-red-50 text-red-600 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
                        Important
                    </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition">{notice.title}</h2>
              <div className="bg-slate-50 p-6 rounded-2xl">
                 <p className="text-slate-600 leading-relaxed text-sm">{notice.content}</p>
                 <div className="mt-4 flex items-center gap-4">
                    <button className="text-indigo-600 text-xs font-bold hover:underline">Read Full Document</button>
                    <button className="text-slate-400 text-xs font-bold hover:text-slate-600 transition">Share Update</button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-3xl p-8 border border-indigo-100 flex items-center justify-between gap-6">
            <div className="flex-1">
                <h3 className="text-indigo-900 font-bold mb-1">Check Exam Results</h3>
                <p className="text-indigo-700 text-sm">Directly fetch your results from the BEU official server.</p>
            </div>
            <a 
              href="https://beu-bih.ac.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition"
            >
              BEU Results portal
            </a>
        </div>
      </div>
    </div>
  );
};
