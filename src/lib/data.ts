import type { Project, Certificate, BlogPost, SiteConfig } from './types'

export const siteConfig: SiteConfig = {
  name: "Namasivayam M",
  description: "A portfolio showcasing data science and machine learning projects.",
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
    title: 'Flower Species Classification',
    description: 'Developed a CNN model using transfer learning (ResNet) to classify flower species with high accuracy. The model was deployed as a web service using Flask.',
    tags: ['Deep Learning', 'CNN', 'ResNet', 'Flask'],
    imageUrl: 'project1',
    link: '#',
    date: '2023-10-01',
  },
  {
    id: '2',
    title: 'Customer Churn Prediction',
    description: 'Built a predictive model using Random Forest to identify customers likely to churn. Performed extensive EDA and feature engineering to improve model performance.',
    tags: ['Machine Learning', 'Random Forest', 'EDA'],
    imageUrl: 'project2',
    link: '#',
    date: '2023-08-15',
  },
  {
    id: '3',
    title: 'Sales Data Analysis Dashboard',
    description: 'Created an interactive dashboard to visualize sales data, uncovering key trends and insights to inform business strategy. Cleaned and preprocessed large datasets.',
    tags: ['Data Analysis', 'Data Visualization', 'SQL'],
    imageUrl: 'project3',
    link: '#',
    date: '2023-05-20',
  },
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Machine Learning Specialization',
    issuedBy: 'Coursera',
    date: '2023-06-01',
    imageUrl: 'certificate1',
    link: '#',
  },
  {
    id: '2',
    title: 'Deep Learning Professional Certificate',
    issuedBy: 'IBM',
    date: '2023-02-11',
    imageUrl: 'certificate2',
    link: '#',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'intro-to-transfer-learning',
    title: 'An Introduction to Transfer Learning with ResNet',
    description: 'A walkthrough of using pre-trained models like ResNet for image classification tasks, and the benefits of transfer learning.',
    date: '2023-11-01',
    tags: ['Deep Learning', 'Python'],
    imageUrl: 'blog1',
    content: 'Markdown content here...',
  },
  {
    id: '2',
    slug: 'the-power-of-eda',
    title: 'The Power of Exploratory Data Analysis (EDA)',
    description: 'How to uncover hidden patterns and insights in your data before you ever start modeling.',
    date: '2023-10-25',
    tags: ['Data Analysis', 'Statistics'],
    imageUrl: 'blog2',
    content: 'Markdown content here...',
  },
  {
    id: '3',
    slug: 'deploying-ml-models-flask',
    title: 'Deploying Your First ML Model with Flask',
    description: 'A step-by-step guide to turning your trained Scikit-Learn model into a live web API with Flask.',
    date: '2023-10-18',
    tags: ['Machine Learning', 'Deployment'],
    imageUrl: 'blog3',
    content: 'Markdown content here...',
  },
];
