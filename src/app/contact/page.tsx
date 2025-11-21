import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container max-w-7xl">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities. Have a question or want to work together?
          </p>
        </div>

        <Card className="mt-16 max-w-5xl mx-auto">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information */}
              <div className="p-8 bg-muted/50 rounded-l-lg">
                <h2 className="text-2xl font-bold font-headline mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-foreground">Email</h3>
                      <p className="mt-1 text-muted-foreground">
                        Drop me an email and I'll get back to you.
                      </p>
                      <a href={`mailto:${siteConfig.name.toLowerCase().replace(' ', '.')}@example.com`} className="mt-2 text-base font-medium text-primary hover:underline">
                        hello@creativecanopy.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Linkedin className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-foreground">LinkedIn</h3>
                      <p className="mt-1 text-muted-foreground">
                        Connect with me on LinkedIn.
                      </p>
                      <Link href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 text-base font-medium text-primary hover:underline">
                        View Profile
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <Github className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-foreground">GitHub</h3>
                      <p className="mt-1 text-muted-foreground">
                        Check out my code and projects.
                      </p>
                       <Link href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="mt-2 text-base font-medium text-primary hover:underline">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8">
                <h2 className="text-2xl font-bold font-headline mb-6">Send me a Message</h2>
                <ContactForm />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
