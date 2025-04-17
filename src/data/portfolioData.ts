// src/data/portfolioData.ts
import { ProjectType } from '../types/ProjectType';
import { SkillType } from '../types/SkillType';
import { SocialLinkType } from '../types/SocialLinkType';

export const skills: SkillType[] = [
  { name: 'React', level: 90 },
  { name: 'Svelte', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Sindle Workshop',
    description: 'Plataforma completa de comércio eletrônico desenvolvida com React e Node.js',
    tags: ['Svelte', 'Golang', 'MongoDB'],
    link: 'https://automotive.simdle.lu/en/workshop'
  },
  {
    id: 2,
    title: 'Boon App',
    description: 'Aplicativo para gestão de finanças com visualização de dados e análises',
    tags: ['React', 'dotnet' ],
    link: 'https://www.boon.ai/'
  },
  {
    id: 3,
    title: 'Portfólio Interativo',
    description: 'Este portfólio que você está vendo agora!',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  }
];

export const socialLinks: SocialLinkType[] = [
  { name: 'GitHub', url: 'https://github.com/ordepsilva' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pedro-silva-120b71184/' },
];

export const otherTechnologies: string[] = [
  'Git', 'Docker', 'Redux', 'GraphQL', 'Next.js', 
  'Tailwind CSS', 'Figma', 'Jest', 'SCSS'
];

export const personalInfo = {
  name: 'Pedro Silva',
  title: 'Frontend Developer',
  bio: '',
  email: 'pedro-manuel16@hotmail.com',
  location: 'Porto'
};