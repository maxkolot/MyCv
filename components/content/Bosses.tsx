import React from 'react';
import { SectionCard } from '../ui/SectionCard';
import { BOSSES_DATA } from '../../constants';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const Bosses: React.FC = () => {
    return (
      <SectionCard title="Boss Encounters">
        <div className="space-y-6">
          {BOSSES_DATA.map((boss) => (
            <motion.div
              key={boss.name}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="bg-black/20 p-4 rounded-md border border-red-500/40"
            >
              <h3 className="text-lg font-bold text-red-400" style={{ textShadow: '0 0 8px #ef4444' }}>{boss.name}</h3>
              <p className="text-xs mt-2 italic text-purple-300">{boss.description}</p>
              <div className="mt-4">
                  <h4 className="text-sm font-bold text-purple-200">Strategy:</h4>
                  <p className="text-xs mt-1 text-purple-300">{boss.strategy}</p>
              </div>
              <div className="mt-4 text-xs font-bold">
                  <span className="text-yellow-400" style={{ textShadow: '0 0 6px #facc15' }}>Loot Dropped: </span>
                  <span className="text-yellow-300">{boss.loot}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionCard>
    );
};