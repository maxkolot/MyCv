import React from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-black/20 backdrop-blur-lg rounded-lg p-6 border border-[#7F5AF0]/30 w-full text-purple-200 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
    >
      <h2 className="text-2xl mb-4 text-cyan-300" style={{ textShadow: '0 0 8px rgba(45, 212, 191, 0.5)' }}>
        {`> ${title}`}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};