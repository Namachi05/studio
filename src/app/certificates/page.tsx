import Image from 'next/image';
import Link from 'next/link';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from '@/components/ui/button';

export default function CertificatesPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Certificates & Awards
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A testament to my dedication to continuous learning and professional growth.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => {
          const image = PlaceHolderImages.find((img) => img.id === certificate.imageUrl);
          return (
            <Card key={certificate.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              {image && (
                <div className="aspect-video relative">
                  <Image
                    src={image.imageUrl}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline flex items-start gap-2">
                  <Award className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  {certificate.title}
                </CardTitle>
                <CardDescription>Issued by {certificate.issuedBy} on {new Date(certificate.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                {certificate.link && (
                  <Button asChild variant="outline" className="w-full">
                    <Link href={certificate.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
