
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AcademicHub } from './components/AcademicHub.tsx';
import { InternshipPortal } from './components/InternshipPortal.tsx';
import { NoticeBoard } from './components/NoticeBoard.tsx';
import { AdminPanel } from './components/AdminPanel.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/academic-hub" element={<AcademicHub />} />
            <Route path="/internships" element={<InternshipPortal />} />
            <Route path="/notices" element={<NoticeBoard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
