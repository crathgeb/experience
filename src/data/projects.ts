import popboxgptImage from '@/assets/images/projects/popboxgpt.png';
import blogpopImage from '@/assets/images/projects/blogpop.png';
import sidecadeImage from '@/assets/images/projects/sidecade.png';
import postpupImage from '@/assets/images/projects/postpup.png';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'popboxgpt',
    title: 'PopboxGPT',
    subtitle: 'AI Content Creation',
    description: 'AI-powered content creation platform for social media',
    image: popboxgptImage,
    link: 'https://popboxgpt.com',
  },
  {
    id: 'blogpop',
    title: 'Blogpop',
    subtitle: 'Blog Management',
    description: 'Blog content management and optimization platform',
    image: blogpopImage,
    link: 'https://blogpop.io',
  },
  {
    id: 'sidecade',
    title: 'Sidecade',
    subtitle: 'Game Discovery',
    description: 'Indie game discovery and community platform',
    image: sidecadeImage,
    link: 'https://sidecade.com',
  },
  {
    id: 'postpup',
    title: 'Postpup',
    subtitle: 'Social Media Tools',
    description: 'Social media scheduling and analytics tool',
    image: postpupImage,
    link: 'https://postpup.io',
  },
];
