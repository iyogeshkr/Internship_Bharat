
import React, { useState } from 'react';

export const AdminPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials! Try admin/admin');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-slate-200">
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-2xl mb-4">IB</div>
             <h1 className="text-2xl font-black text-slate-900">Admin Control</h1>
             <p className="text-slate-400 text-sm">Manage Internship Bharat portal</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-indigo-600 text-white font-black py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100">
              SECURE LOGIN
            </button>
          </form>
          <p className="mt-8 text-center text-xs text-slate-400">Restricted access. All actions are logged.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
           <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
             <span className="w-8 h-8 bg-indigo-600 rounded-lg"></span>
             Dashboard
           </h1>
           <button onClick={() => setIsLoggedIn(false)} className="text-red-600 font-bold hover:underline">Logout</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
                    Pending Internship Approvals
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black">2 PENDING</span>
                </h2>
                <div className="space-y-4">
                    {[1, 2].map(i => (
                        <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <div>
                                <h4 className="font-bold text-slate-900">Python Developer Intern</h4>
                                <p className="text-xs text-slate-500">Mithila Tech Hub • Remote</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-green-700">Approve</button>
                                <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-bold hover:bg-red-100">Reject</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold mb-6">System Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Students', value: '12.4K', color: 'indigo' },
                        { label: 'Resources', value: '840', color: 'blue' },
                        { label: 'Internships', value: '42', color: 'green' },
                        { label: 'Notices', value: '156', color: 'orange' }
                    ].map(stat => (
                        <div key={stat.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{stat.label}</p>
                            <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-lg font-bold mb-4">Post New Notice</h3>
                <form className="space-y-4">
                    <input className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm text-white focus:outline-none" placeholder="Notice Title" />
                    <textarea className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm text-white focus:outline-none h-32" placeholder="Content..."></textarea>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="important" className="w-4 h-4" />
                        <label htmlFor="important" className="text-xs font-bold">Mark as Urgent</label>
                    </div>
                    <button className="w-full bg-white text-slate-900 font-black py-3 rounded-xl hover:bg-slate-100 transition">PUBLISH NOTICE</button>
                </form>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="font-bold mb-4 text-slate-900">Admin Activity</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-slate-500"><span className="font-bold text-slate-700">Admin-1</span> approved CSE 5th Sem Notes.</p>
                        </div>
                    ))}
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
