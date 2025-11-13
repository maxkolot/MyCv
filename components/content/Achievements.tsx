import React from 'react';
import { SectionCard } from '../ui/SectionCard';
import { ACHIEVEMENTS_DATA } from '../../constants';
import { motion } from 'framer-motion';

export const Achievements: React.FC = () => {
    return (
      <SectionCard title="Achievements Unlocked">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACHIEVEMENTS_DATA.map((achievement, index) => (
            <motion.div
              key={achievement.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 15px rgba(127, 90, 240, 0.6)',
                borderColor: 'rgba(127, 90, 240, 0.8)'
              }}
              className="flex flex-col items-center text-center p-4 bg-black/20 rounded-md border border-purple-400/50 transition-colors"
            >
                <span className="text-4xl">{achievement.icon}</span>
                <h4 className="text-xs font-bold mt-2 text-purple-200">{achievement.name}</h4>
                <p className="text-[10px] mt-1 text-purple-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </SectionCard>
    );
};