import React from 'react';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
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
  );
};

export default App;
