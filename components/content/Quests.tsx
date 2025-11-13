import React from 'react';
import { SectionCard } from '../ui/SectionCard';
import { QUESTS_DATA } from '../../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export const Quests: React.FC = () => {
  return (
    <SectionCard title="Quest Log">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
        {QUESTS_DATA.map((quest) => (
            <motion.div key={quest.title} variants={itemVariants} className="mb-6 last:mb-0 bg-black/20 p-4 rounded-md border border-purple-400/50">
                <div className="flex justify-between items-start">
                    <h3 className="text-md font-bold text-purple-200">{quest.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${quest.status === 'Completed' ? 'bg-green-400/20 text-green-300 border-green-400/50' : 'bg-cyan-400/20 text-cyan-300 border-cyan-400/50'}`}>
                        {quest.status}
                    </span>
                </div>
                <p className="text-xs mt-2 mb-3 text-purple-300">{quest.description}</p>
                <div className="text-xs">
                    <span className="font-bold text-purple-200">Rewards:</span>
                    <span className="text-purple-300 ml-2">{quest.rewards.join(', ')}</span>
                </div>
            </motion.div>
        ))}
      </motion.div>
    </SectionCard>
  );
};