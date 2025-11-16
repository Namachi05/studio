import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/lib/data";

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'avatar');
  const skills = ["React", "TypeScript", "Next.js", "Node.js", "Firebase", "Tailwind CSS", "Figma", "UI/UX Design", "GraphQL"];

  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex flex-col items-center">
          {avatarImage && (
            <Image
              src={avatarImage.imageUrl}
              alt="John Doe"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary shadow-lg"
              data-ai-hint={avatarImage.imageHint}
            />
          )}
          <h1 className="font-headline text-3xl font-bold mt-6">John Doe</h1>
          <p className="text-muted-foreground mt-1">Creative Developer</p>
          <Button asChild className="mt-6 w-full">
            <Link href={siteConfig.resumeUrl} target="_blank">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="md:col-span-2">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl border-b pb-4">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert mt-6 max-w-none text-muted-foreground space-y-6">
            <p>
              Hello! I'm John, a passionate and detail-oriented developer and designer with a love for creating beautiful, functional, and user-centered digital experiences. I thrive on turning complex problems into simple, elegant solutions.
            </p>
            <p>
              With over 5 years of experience in the industry, I have honed my skills in front-end development, back-end architecture, and UI/UX design. My journey in tech began with a fascination for how things work, which quickly evolved into a career building applications that people love to use.
            </p>
            <p>
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source projects, or hiking in the great outdoors.
            </p>
          </div>
          <h3 className="font-headline text-2xl font-bold mt-12 border-b pb-4">My Skills</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map(skill => (
              <Badge key={skill} variant="default" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
