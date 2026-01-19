
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Empowering Bihar's</span>{' '}
                <span className="block text-indigo-600 xl:inline">Engineering Future</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A centralized hub for B.Tech and Polytechnic students. Access free study materials, verified internships, and the latest official updates from BEU & SBTE.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigate('/academic-hub?stream=Polytechnic')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-indigo-100 transition-all transform hover:-translate-y-1"
                >
                  POLYTECHNIC STUDENTS
                </button>
                <button
                  onClick={() => navigate('/academic-hub?stream=B.Tech')}
                  className="mt-3 sm:mt-0 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 shadow-lg transition-all transform hover:-translate-y-1"
                >
                  B.TECH STUDENTS
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6">
                 <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                        <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={`https://picsum.photos/100?random=${i}`} alt="user" />
                    ))}
                 </div>
                 <div className="text-sm text-gray-600">
                    <span className="font-bold text-indigo-600">10,000+</span> Bihar students already joined
                 </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://picsum.photos/1000/800?education" alt="Engineering Hub" />
      </div>

      <div className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need in one place</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">No more searching through disorganized groups. Get high-quality resources verified by seniors.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
                            </div>
                            Verified Notes & Syllabus
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Handwritten notes, detailed syllabus, and previous year questions organized by semester.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875v-4.25m16.5 0a2.625 2.625 0 00-5.25 0m5.25 0v-3.375c0-.621-.504-1.125-1.125-1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75a3.375 3.375 0 00-3.375 3.375v1.5a1.125 1.125 0 01-1.125 1.125H3a1.125 1.125 0 00-1.125 1.125v3.375m17.25 0h-17.25" /></svg>
                            </div>
                            Verified Internships
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Opportunities tailored for Bihar students. Simple application via Google Forms.</p>
                        </dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                            </div>
                            Official Notifications
                        </dt>
                        <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p className="flex-auto">Stay updated with BEU and SBTE news, result declarations, and exam schedules.</p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
      </div>
    </div>
  );
};
