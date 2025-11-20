import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { projects, blogPosts, siteConfig } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProjectCard } from '@/components/project-card';
import { BlogPostCard } from '@/components/blog-post-card';

function findImage(id: string) {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function Home() {
  const avatarImage = findImage('avatar');
  const heroImage = findImage('hero');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Data analysis visualization"
            fill
            className="object-cover opacity-10"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Data Scientist & ML Engineer
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Transforming raw data into actionable insights and building end-to-end data-driven applications.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href={siteConfig.resumeUrl} target="_blank">
                Download Resume <Download className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-3">
          <div className="flex justify-center md:justify-start">
            {avatarImage && (
              <Image
                src={avatarImage.imageUrl}
                alt="Alex Doe"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-lg"
                data-ai-hint={avatarImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:col-span-2 md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              M.Sc. Data Science Graduate
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A passionate data scientist with a knack for building predictive models and developing data-driven applications. With a background in Computer Science and Data Science, I bring a unique perspective to every project, focusing on delivering clear, impactful results.
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-lg">
              <Link href="/about">Learn more <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">A selection of my best work in data science.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Latest from the Blog</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">My thoughts on data science, machine learning, and more.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/blog">Read More Posts</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let's work together to create something amazing. I'm always open to new opportunities and collaborations.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get in Touch <Mail className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
