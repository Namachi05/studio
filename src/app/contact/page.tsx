import { ContactForm } from "@/components/contact-form"
import { Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-7xl py-16 px-4 sm:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities. Have a question or want to work together?
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-8">
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
                <a href="mailto:hello@creativecanopy.dev" className="mt-2 text-base font-medium text-primary hover:underline">
                  hello@creativecanopy.dev
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-foreground">Phone</h3>
                <p className="mt-1 text-muted-foreground">
                  Give me a call for a quick chat.
                </p>
                <a href="tel:+1234567890" className="mt-2 text-base font-medium text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
