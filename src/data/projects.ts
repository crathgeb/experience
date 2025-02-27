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
    subtitle: 'An AI Assistant on any page',
    description:
      'PopboxGPT is an AI assistant that can be used on any website.  It functions as a chrome extension and can be injected into any webpage.  Placed #24th on ProductHunt',
    image: popboxgptImage,
    link: 'https://popboxgpt.com',
  },
  {
    id: 'blogpop',
    title: 'Blogpop',
    subtitle: 'An API first content machine',
    description:
      'Blogpop is a blog-based CMS with built in LLM and batch automation processes all designed to be API first.',
    image: blogpopImage,
    link: 'https://blogpop.io',
  },
  {
    id: 'sidecade',
    title: 'Sidecade',
    subtitle: 'Browser games on any page',
    description:
      'Sidecade functions as both a chrome extension and a drop in js snippet to add browser games to any website.  Placed #27th on ProductHunt',
    image: sidecadeImage,
    link: 'https://sidecade.com',
  },
  {
    id: 'postpup',
    title: 'Postpup',
    subtitle: 'Social media writing tool',
    description:
      'Postpup is a social distribution gateway that allows you to write, format, and post to multiple social media platforms.',
    image: postpupImage,
    link: 'https://postpup.io',
  },
];
