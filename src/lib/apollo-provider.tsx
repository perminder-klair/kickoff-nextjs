import { PropsWithChildren } from 'react';
import { from, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { getSession } from 'next-auth/react';

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext(async (operation, { headers }) => {
  const session: any = await getSession();

  return {
    headers: {
      ...headers,
      Authorization: session?.token || '',
    },
  };
});

export function makeClient() {
  return new ApolloClient({
    link: from([
      new RetryLink(),
      errorLink,
      authLink,
      new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_API }),
    ]),
    cache: new InMemoryCache(),
  });
}

function Provider({ children, ...props }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} {...props}>
      {children}
    </ApolloNextAppProvider>
  );
}

export default Provider;
