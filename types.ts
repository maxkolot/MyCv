// FIX: Import React to make React types available in this file.
import React from 'react';

export enum Section {
  Origins = 'Origins',
  Skills = 'Skills',
  Quests = 'Quests',
  Bosses = 'Bosses',
  Achievements = 'Achievements',
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: React.ComponentType<{ className?: string }>;
}

export interface Quest {
  title: string;
  description: string;
  status: 'Completed' | 'In Progress';
  rewards: string[];
}

export interface Boss {
  name: string;
  description: string;
  strategy: string;
  loot: string;
}

export interface Achievement {
  name: string;
  description: string;
  icon: string; // emoji
}