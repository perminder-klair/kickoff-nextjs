import React from 'react';

import ContactForm from '@/components/ContactForm';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>
            Enter your information to contact us
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground text-center text-sm">
            By clicking send message, you agree to our{' '}
            <a
              href="#"
              className="hover:text-primary underline underline-offset-4"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="#"
              className="hover:text-primary underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
