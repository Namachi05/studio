'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, LoaderCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { submitContactForm, type FormState } from '@/app/contact/actions'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          Send Message <ArrowRight className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  )
}

export function ContactForm() {
  const initialState: FormState = { message: '', type: undefined };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.type === 'success') {
      toast({
        title: 'Success!',
        description: state.message,
        variant: 'default',
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {state.type === 'error' && (
         <Alert variant="destructive">
           <AlertTitle>Error</AlertTitle>
           <AlertDescription>
             {state.message}
             {state.issues && (
               <ul className="list-disc pl-5 mt-2">
                 {state.issues.map((issue, i) => <li key={i}>{issue}</li>)}
               </ul>
             )}
           </AlertDescription>
         </Alert>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your Name" required defaultValue={state.fields?.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required defaultValue={state.fields?.email} />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message..." required rows={6} defaultValue={state.fields?.message} />
      </div>
      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  )
}
