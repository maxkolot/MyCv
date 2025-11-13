import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PixelCharacterProps {
  position: {
    top: string;
    left: string;
  };
}

const CharacterSprite: React.FC<{ frame: 'stand' | 'walk1' | 'walk2' }> = ({ frame }) => (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 16 16" 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ imageRendering: 'pixelated', transform: 'scale(2)', transformOrigin: 'bottom' }}
    >
        <g id="character-body">
            {/* Hair */}
            <rect x="5" y="1" width="4" height="1" fill="#FFC2E1" /> {/* Highlight */}
            <rect x="5" y="2" width="6" height="1" fill="#FFB3D1" /> {/* Main */}
            <rect x="4" y="3" width="8" height="2" fill="#FFB3D1" /> {/* Sides */}
            
            {/* Face */}
            <rect x="5" y="4" width="6" height="3" fill="#FCE0E8" />
            
            {/* Eyes */}
            <rect x="6" y="5" width="1" height="1" fill="#1F1F1F" />
            <rect x="9" y="5" width="1" height="1" fill="#1F1F1F" />
            
            {/* Tunic */}
            <rect x="4" y="7" width="8" height="4" fill="#A978F2" />
            <rect x="6" y="7" width="4" height="1" fill="#C9A8F5" /> {/* Collar */}
            
            {/* Hands */}
            <rect x="4" y="9" width="1" height="1" fill="#FCE0E8" />
            <rect x="11" y="9" width="1" height="1" fill="#FCE0E8" />

            {/* Belt */}
            <rect x="5" y="10" width="6" height="1" fill="#4A4A4A" />
            <rect x="7" y="10" width="2" height="1" fill="#FFD700" /> {/* Buckle */}
        </g>
        
        {frame === 'stand' && (
            <g id="legs-stand">
                {/* Legs (Pants) */}
                <rect x="5" y="11" width="3" height="2" fill="#5F5F5F" />
                <rect x="8" y="11" width="3" height="2" fill="#5F5F5F" />
                {/* Boots */}
                <rect x="5" y="13" width="3" height="1" fill="#4A4A4A" />
                <rect x="8" y="13" width="3" height="1" fill="#4A4A4A" />
            </g>
        )}
        
        {frame === 'walk1' && ( // Right leg back
            <g id="legs-walk1">
                {/* Left Leg (forward) */}
                <rect x="5" y="11" width="3" height="2" fill="#5F5F5F" />
                <rect x="5" y="13" width="3" height="1" fill="#4A4A4A" />
                {/* Right Leg (back) */}
                <rect x="8" y="11" width="3" height="1" fill="#5F5F5F" />
                <rect x="8" y="12" width="3" height="1" fill="#4A4A4A" />
            </g>
        )}

        {frame === 'walk2' && ( // Left leg back
            <g id="legs-walk2">
                {/* Left Leg (back) */}
                <rect x="5" y="11" width="3" height="1" fill="#5F5F5F" />
                <rect x="5" y="12" width="3" height="1" fill="#4A4A4A" />
                {/* Right Leg (forward) */}
                <rect x="8" y="11" width="3" height="2" fill="#5F5F5F" />
                <rect x="8" y="13" width="3" height="1" fill="#4A4A4A" />
            </g>
        )}
    </svg>
);


export const PixelCharacter: React.FC<PixelCharacterProps> = ({ position }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [frame, setFrame] = useState<'stand' | 'walk1' | 'walk2'>('stand');

  useEffect(() => {
    if (!isMoving) {
      setFrame('stand');
      return;
    }

    const walkCycle: ('stand' | 'walk1' | 'walk2')[] = ['walk1', 'stand', 'walk2', 'stand'];
    let frameIndex = 0;
    const intervalId = setInterval(() => {
      frameIndex = (frameIndex + 1) % walkCycle.length;
      setFrame(walkCycle[frameIndex]);
    }, 150); // Animation speed

    return () => clearInterval(intervalId);
  }, [isMoving]);

  return (
    <motion.div
      className="absolute z-10"
      style={{
          // Adjust position to center the character sprite above the map point
          transform: 'translate(-50%, -100%)',
          filter: 'drop-shadow(0 0 4px #7F5AF0)'
      }}
      initial={false}
      animate={{ top: position.top, left: position.left }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      onAnimationStart={() => setIsMoving(true)}
      onAnimationComplete={() => setIsMoving(false)}
    >
      <CharacterSprite frame={frame} />
    </motion.div>
  );
};