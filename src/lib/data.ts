import type { Project, Certificate, BlogPost, SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: "Creative Canopy",
  description: "A portfolio showcasing creative work and projects.",
  url: "https://example.com",
  socials: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  resumeUrl: "#",
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A web application for project management, featuring real-time collaboration and task tracking.',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    imageUrl: 'project1',
    link: '#',
    date: '2023-10-01',
  },
  {
    id: '2',
    title: 'Mobile Design System',
    description: 'A comprehensive design system for mobile apps, ensuring brand consistency and accelerating development.',
    tags: ['Figma', 'UI/UX', 'iOS'],
    imageUrl: 'project2',
    link: '#',
    date: '2023-08-15',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, with dynamic filters and charts.',
    tags: ['D3.js', 'TypeScript', 'Data Viz'],
    imageUrl: 'project3',
    link: '#',
    date: '2023-05-20',
  },
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Certified TypeScript Developer',
    issuedBy: 'Tech University',
    date: '2023-06-01',
    imageUrl: 'certificate1',
    link: '#',
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    issuedBy: 'Online Courses Inc.',
    date: '2023-02-11',
    imageUrl: 'certificate2',
    link: '#',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    description: 'A deep dive into advanced Tailwind CSS techniques for building responsive and custom user interfaces.',
    date: '2023-11-01',
    tags: ['CSS', 'Web Development'],
    imageUrl: 'blog1',
    content: 'Markdown content here...',
  },
  {
    id: '2',
    slug: 'the-art-of-ui-design',
    title: 'The Art of UI Design',
    description: 'Principles and practices for creating beautiful, intuitive, and effective user interfaces.',
    date: '2023-10-25',
    tags: ['UI/UX', 'Design'],
    imageUrl: 'blog2',
    content: 'Markdown content here...',
  },
  {
    id: '3',
    slug: 'collaborative-workflows',
    title: 'Effective Collaborative Workflows for Dev Teams',
    description: 'How to improve teamwork and productivity in development projects using modern tools and methodologies.',
    date: '2023-10-18',
    tags: ['Productivity', 'Teamwork'],
    imageUrl: 'blog3',
    content: 'Markdown content here...',
  },
];
