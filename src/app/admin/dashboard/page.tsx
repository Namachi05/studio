
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          Admin Dashboard
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Manage your portfolio content here.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>
            Update your profile picture. This feature is not yet implemented.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <input type="file" disabled className="mb-4" />
            <Button disabled>Upload New Picture</Button>
          </form>
        </CardContent>
      </Card>
       <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/">
                Back to Home
              </Link>
            </Button>
        </div>
    </div>
  );
}
