
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">IB</div>
              <span className="text-lg font-bold">Skill Bihar</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">Bihar's leading platform for B.Tech and Polytechnic students. Helping you navigate engineering with ease.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><Link to="/academic-hub" className="hover:text-indigo-600">Syllabus</Link></li>
              <li><Link to="/academic-hub" className="hover:text-indigo-600">Free Notes</Link></li>
              <li><Link to="/academic-hub" className="hover:text-indigo-600">Previous Year Papers</Link></li>
              <li><Link to="/internships" className="hover:text-indigo-600">Find Internships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact Support</a></li>
              <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Community</h4>
            <div className="flex gap-4 mb-6">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.411 2.865 8.149 6.839 9.465.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.148 22 16.413 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </div>
                ))}
            </div>
            <p className="text-xs text-slate-400 font-medium">Join 50+ Telegram & WhatsApp groups across Bihar.</p>
          </div>
        </div>
        <div className="border-t border-slate-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-bold">© 2026 Internship Bharat. Managed by Bihar Student Community.</p>
            <p className="text-xs text-slate-400 flex items-center gap-1">Made with <span className="text-red-500">❤️</span> for Bihar Engineers</p>
        </div>
      </div>
    </footer>
  );
};
