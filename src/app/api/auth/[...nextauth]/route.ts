import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const login = async (credentials: any) => {
  console.log('login', credentials);
  return { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
};

export const authOptions: any = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/register', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        // console.log('authorizing...', credentials);

        // Add logic here to look up the user from the credentials supplied
        const user = await login(credentials);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }: any) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
        name: session.user.name || session.user.email,
      },
      token: token.token,
    }),
    jwt: ({ token, user }: any) => {
      if (user) {
        return {
          ...token,
          token: user.token,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
