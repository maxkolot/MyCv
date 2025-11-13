import React from 'react';
import { Section } from '../types';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PixelCharacter } from './PixelCharacter';

interface MapNavigationProps {
  activeSection: Section;
  onSelectSection: (section: Section) => void;
}

const mapLocations = [
  { id: Section.Origins, label: 'Start Village', top: '15%', left: '10%' },
  { id: Section.Skills, label: 'Training Grounds', top: '40%', left: '30%' },
  { id: Section.Quests, label: 'The Hub', top: '50%', left: '60%' },
  { id: Section.Bosses, label: 'Danger Zone', top: '20%', left: '75%' },
  { id: Section.Achievements, label: 'Hall of Fame', top: '75%', left: '45%' },
];

export const MapNavigation: React.FC<MapNavigationProps> = ({ activeSection, onSelectSection }) => {
  const [characterPosition, setCharacterPosition] = useState(mapLocations[0]);

  useEffect(() => {
    const activeLocation = mapLocations.find(loc => loc.id === activeSection);
    if (activeLocation) {
      setCharacterPosition(activeLocation);
    }
  }, [activeSection]);

  return (
    <div 
      className="w-full h-64 md:h-96 rounded-lg bg-[#100C2A] border-2 border-[#7F5AF0]/50 relative overflow-hidden shadow-[0_0_20px_rgba(127,90,240,0.4)] mb-8"
      style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(127, 90, 240, 0.1), transparent 30%), radial-gradient(circle at 75% 75%, rgba(249, 106, 194, 0.1), transparent 30%)'
      }}
    >
      <svg className="absolute top-0 left-0 w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g style={{ filter: 'url(#glow)' }}>
            <path d="M12% 17% C 25% 30%, 35% 35%, 42% 42%" stroke="#7F5AF0" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M44% 44% C 50% 50%, 55% 55%, 62% 52%" stroke="#7F5AF0" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M64% 52% C 70% 45%, 75% 35%, 77% 22%" stroke="#7F5AF0" strokeWidth="1.5" strokeDasharray="4,4" />
            <path d="M62% 52% C 55% 65%, 50% 70%, 47% 77%" stroke="#7F5AF0" strokeWidth="1.5" strokeDasharray="4,4" />
        </g>
      </svg>
      
      <PixelCharacter position={characterPosition} />

      {mapLocations.map((loc) => (
        <motion.button
          key={loc.id}
          onClick={() => onSelectSection(loc.id)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
          style={{ top: loc.top, left: loc.left }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className={`w-5 h-5 transition-all duration-300`}
            style={{ 
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: activeSection === loc.id ? 'white' : '#7F5AF0'
            }}
            animate={{
              scale: activeSection === loc.id ? [1.5, 1.8, 1.5] : [1, 1.2, 1],
              boxShadow: activeSection === loc.id 
                ? '0 0 10px #fff, 0 0 20px #7F5AF0, 0 0 30px #F96AC2' 
                : '0 0 5px #7F5AF0, 0 0 10px #7F5AF0',
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-xs bg-black/70 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {loc.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
};