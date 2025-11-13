import React from 'react';
import { useState } from 'react';
import { Section } from './types';
import { MapNavigation } from './components/MapNavigation';
import { Origins } from './components/content/Origins';
import { Skills } from './components/content/Skills';
import { Quests } from './components/content/Quests';
import { Bosses } from './components/content/Bosses';
import { Achievements } from './components/content/Achievements';
import { AnimatePresence } from 'framer-motion';

const renderSection = (section: Section) => {
  switch (section) {
    case Section.Origins:
      return <Origins />;
    case Section.Skills:
      return <Skills />;
    case Section.Quests:
      return <Quests />;
    case Section.Bosses:
      return <Bosses />;
    case Section.Achievements:
      return <Achievements />;
    default:
      return <Origins />;
  }
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Origins);

  return (
    <div className="min-h-screen bg-[#1A103C] text-purple-200 p-4 md:p-8" style={{ background: 'radial-gradient(ellipse at center, #1A103C 50%, #0F0924 100%)' }}>
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F96AC2] to-[#A978F2] mb-2" style={{textShadow: '0 0 5px #F96AC2, 0 0 10px #F96AC2, 0 0 20px #A978F2'}}>
            Maksim Kolotilov
          </h1>
          <p className="text-sm text-purple-300">Level 28 Python Backend Developer</p>
          <p className="text-xs text-purple-400 mt-1">📍 Based in Barcelona</p>
        </header>

        <main>
          <MapNavigation activeSection={activeSection} onSelectSection={setActiveSection} />
          <div className="w-full">
            <AnimatePresence mode="wait">
              <div key={activeSection}>
                {renderSection(activeSection)}
              </div>
            </AnimatePresence>
          </div>
        </main>
        
        <footer className="text-center mt-12 text-xs text-purple-400/70">
          <p>Game created with React, Tailwind CSS, and Framer Motion.</p>
          <p>Press 'A' to continue... or just click around.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;