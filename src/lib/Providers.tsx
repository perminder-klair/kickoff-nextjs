'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

import ApolloProvider from '@/lib/apollo-provider';
import { ThemeProvider } from '@/lib/theme-provider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider forcedTheme="light" enableSystem>
      <SessionProvider>
        <ApolloProvider>{children}</ApolloProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
