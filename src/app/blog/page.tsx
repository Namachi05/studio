import { BlogPostCard } from "@/components/blog-post-card";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          From the Blog
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          My thoughts and insights on technology, design, and professional growth.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
