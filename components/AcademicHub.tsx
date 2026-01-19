
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stream, Branch, ResourceType } from '../types.ts';
import { MOCK_RESOURCES } from '../data.ts';
import { getGeminiHelp } from '../services/geminiService.ts';

export const AcademicHub: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [stream, setStream] = useState<Stream>(searchParams.get('stream') as Stream || 'B.Tech');
  const [semester, setSemester] = useState<number | null>(null);
  const [branch, setBranch] = useState<Branch | null>(null);
  const [resourceType, setResourceType] = useState<ResourceType | null>(null);
  
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loadingAi, setLoadingAi] = useState(false);

  const branches: Branch[] = ['CSE', 'Civil', 'Mechanical', 'EEE', 'ECE', 'IT'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const filteredResources = MOCK_RESOURCES.filter(r => 
    r.stream === stream &&
    (!semester || r.semester === semester) &&
    (!branch || r.branch === branch) &&
    (!resourceType || r.type === resourceType)
  );

  const handleAiAsk = async () => {
    if (!aiQuery.trim()) return;
    setLoadingAi(true);
    const help = await getGeminiHelp(aiQuery);
    setAiResponse(help || 'Error fetching help');
    setLoadingAi(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-indigo-700 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Academic Resources</h1>
          <p className="text-indigo-100 max-w-2xl mx-auto">Find the exact materials you need for your semester exams and skill building.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                Filter Resources
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Stream</label>
                <div className="flex gap-2">
                  {['Polytechnic', 'B.Tech'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setStream(s as Stream)}
                      className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${stream === s ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Semester</label>
                <select 
                  onChange={(e) => setSemester(Number(e.target.value) || null)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">All Semesters</option>
                  {semesters.map(s => <option key={s} value={s}>{s}{s === 1 ? 'st' : s === 2 ? 'nd' : s === 3 ? 'rd' : 'th'} Sem</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Branch</label>
                <select 
                  onChange={(e) => setBranch(e.target.value as Branch || null)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option value="">All Branches</option>
                  {branches.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Type</label>
                <div className="grid grid-cols-1 gap-2">
                  {['Syllabus', 'Notes', 'PYQ'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setResourceType(t as ResourceType === resourceType ? null : t as ResourceType)}
                      className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition ${resourceType === t ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-2xl shadow-lg text-white">
            <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
              <span className="animate-pulse w-2 h-2 rounded-full bg-green-400"></span>
              AI Assistant
            </h4>
            <p className="text-indigo-100 text-sm mb-4">Ask anything about your engineering syllabus.</p>
            <div className="space-y-3">
              <input 
                type="text" 
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Ex: CSE 3rd sem subjects..."
                className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-3 text-sm text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button 
                onClick={handleAiAsk}
                disabled={loadingAi}
                className="w-full bg-white text-indigo-700 font-bold py-2 rounded-lg text-sm hover:bg-indigo-50 transition flex items-center justify-center gap-2"
              >
                {loadingAi ? 'Thinking...' : 'Ask AI'}
              </button>
            </div>
            {aiResponse && (
              <div className="mt-4 p-3 bg-white/10 rounded-lg text-xs leading-relaxed border border-white/20">
                {aiResponse}
              </div>
            )}
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              {resourceType || 'All'} {stream} Materials
              <span className="ml-3 text-sm font-normal text-slate-400">({filteredResources.length} found)</span>
            </h2>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map(resource => (
                <div key={resource.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${
                      resource.type === 'Syllabus' ? 'bg-orange-50 text-orange-600' : 
                      resource.type === 'Notes' ? 'bg-blue-50 text-blue-600' : 
                      'bg-purple-50 text-purple-600'
                    }`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
                        {resource.branch} • {resource.semester}th Sem
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{resource.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{resource.description}</p>
                  <a 
                    href={resource.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition"
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Resources Found</h3>
                <p className="text-slate-500">We don't have these specific files yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
