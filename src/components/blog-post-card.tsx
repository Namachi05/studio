import Image from 'next/image'
import Link from 'next/link'

import type { BlogPost } from '@/lib/types'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from './ui/badge'

export function BlogPostCard({ post }: { post: BlogPost }) {
  const image = PlaceHolderImages.find((img) => img.id === post.imageUrl);

  return (
    <Card className="flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {image && (
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline group-hover:text-primary transition-colors">{post.title}</CardTitle>
          <CardDescription>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-muted-foreground line-clamp-3 flex-grow">{post.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
