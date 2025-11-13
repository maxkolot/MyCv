import React from 'react';
import { SectionCard } from '../ui/SectionCard';
import { ProgressBar } from '../ui/ProgressBar';
import { SKILLS_DATA } from '../../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const Skills: React.FC = () => {
  return (
    <SectionCard title="Skill Tree">
      <motion.ul 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SKILLS_DATA.map((skill) => (
          <motion.li key={skill.name} variants={itemVariants}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <skill.icon className="w-6 h-6" />
                <span className="text-sm font-bold text-purple-200">{skill.name}</span>
              </div>
              <span className="text-xs text-purple-300">{`Lvl ${skill.level}`}</span>
            </div>
            <ProgressBar level={skill.level} />
          </motion.li>
        ))}
      </motion.ul>
    </sectionCard>
  );
};