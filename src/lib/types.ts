export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
  date: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuedBy: string;
  date: string;
  imageUrl: string;
  link?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  imageUrl: string;
  content: string; // Markdown content
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
  };
  resumeUrl: string;
}
