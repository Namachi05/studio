import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { Project } from '@/lib/types'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export function ProjectCard({ project }: { project: Project }) {
  const image = PlaceHolderImages.find((img) => img.id === project.imageUrl);

  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      {image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <CardDescription>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {project.link && (
          <Button asChild variant="outline" className="w-full">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
