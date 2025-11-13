import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  level: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ level }) => {
  return (
    <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden border border-purple-400/30">
      <motion.div
        className="h-full bg-gradient-to-r from-[#F96AC2] to-[#7F5AF0]"
        style={{
            boxShadow: '0 0 8px #F96AC2, 0 0 12px #7F5AF0'
        }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
};