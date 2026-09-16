import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { PWAShowcase } from './components/PWAShowcase';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechArsenal } from './components/TechArsenal';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden w-full relative max-w-full antialiased font-sans">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <PWAShowcase />
          <Projects />
          <Experience />
          <TechArsenal />
          <Methodology />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
