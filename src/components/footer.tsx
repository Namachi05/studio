import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/data'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href={siteConfig.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          <Link href="/admin/login" className="hover:text-primary transition-colors">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  )
}
