import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { siteConfig } from "@/lib/data";

export default function AboutPage() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'avatar');
  const skills = [
    "Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib",
    "SQL", "Git & GitHub", "Flask", "Jupyter Notebook",
    "Supervised Learning", "Unsupervised Learning", "Random Forest",
    "Transfer Learning", "ResNet", "Model Evaluation",
    "Deep Learning", "CNNs", "Image Classification",
    "Data Analysis", "Data Visualization", "ETL", "Problem Solving"
  ];

  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col items-center">
          {avatarImage && (
            <Image
              src={avatarImage.imageUrl}
              alt="Alex Doe"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary shadow-lg"
              data-ai-hint={avatarImage.imageHint}
            />
          )}
          <h1 className="font-headline text-3xl font-bold mt-6">Alex Doe</h1>
          <p className="text-muted-foreground mt-1 text-center">Data Scientist & Machine Learning Engineer</p>
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
              M.Sc. Data Science graduate with a strong foundation in computer science (B.Sc. CS) and hands-on experience in data analysis, machine learning, and model deployment.
            </p>
            <p>
              I am skilled in transforming raw data into actionable insights, building predictive models, and developing end-to-end data-driven applications. My experience includes a wide range of ML algorithms, deep learning (ResNet, transfer learning), data visualization, and deploying models through Flask.
            </p>
            <p>
              I am passionate about solving real-world problems using data and delivering clear, impactful results.
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
