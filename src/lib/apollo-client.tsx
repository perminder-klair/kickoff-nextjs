import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';

import { makeClient } from './apollo-provider';

export const { getClient } = registerApolloClient(() => makeClient());
