
import { Skill, Quest, Boss, Achievement } from './types';
import { PythonIcon, FastAPIIcon, PostgresIcon, DockerIcon } from './components/icons/SkillIcons';

export const SKILLS_DATA: Skill[] = [
  { name: 'Python', level: 95, icon: PythonIcon },
  { name: 'FastAPI', level: 90, icon: FastAPIIcon },
  { name: 'PostgreSQL', level: 85, icon: PostgresIcon },
  { name: 'Docker', level: 80, icon: DockerIcon },
];

export const QUESTS_DATA: Quest[] = [
  { 
    title: 'The Microservices of Kuicktech', 
    description: 'Forged and maintained potent FastAPI microservices, infusing them with LLM intelligence to bolster backend automation and power.', 
    status: 'Completed',
    rewards: ['+450 XP', 'Tome of Scalability', 'LLM Integration Rune']
  },
  { 
    title: 'The Freelancer\'s Gauntlet', 
    description: 'Delivered a variety of custom enchantments, from adaptive websites to powerful Telegram automation scripts, integrating APIs from GPT, DeepSeek, and Anthropic.', 
    status: 'Completed',
    rewards: ['+600 XP', 'Cloak of Versatility', 'Ring of API Mastery']
  },
   { 
    title: 'The Heart-Link Crystal', 
    description: 'Currently crafting a legendary dating WebApp within the realm of Telegram, powered by a FastAPI backend and recommendation algorithms.', 
    status: 'In Progress',
    rewards: ['+??? XP', 'Blueprint of Connection']
  },
];

export const BOSSES_DATA: Boss[] = [
  {
    name: 'The Hydra of Many Projects',
    description: 'A multi-headed beast from the freelance realm, where each head demanded a different tech stack and had its own urgent deadline.',
    strategy: 'Tamed with robust automation scripts for repetitive tasks, clear documentation for each "head", and disciplined time-management spells.',
    loot: 'Amulet of Multitasking'
  },
  {
    name: 'The Silent API Sphinx',
    description: 'An ancient and powerful LLM that gave cryptic, unhelpful responses, guarding its knowledge behind a riddle of poor documentation.',
    strategy: 'Mastered the arcane art of Prompt Engineering, crafting precise incantations and structured queries to reliably extract valuable treasures of information.',
    loot: 'Orb of a Thousand Prompts'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { name: 'LLM Whisperer', description: 'Integrated GPT, DeepSeek, and Anthropic models into various systems.', icon: '🧠' },
  { name: 'Microservice Architect', description: 'Built and maintained scalable FastAPI microservices.', icon: '🏗️' },
  { name: 'Telegram Tamer', description: 'Deployed multiple complex Telegram bots with custom logic.', icon: '🤖' },
  { name: 'Full-Stack Foundations', description: 'Successfully transitioned from frontend origins to backend mastery.', icon: '🔄' },
];