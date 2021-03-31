import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import { onErrorLink } from './apollo-on-error-link';
import { requestTimeLink } from './apollo-request-time-link';
import { authLink } from './apollo-auth-link';

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: from([
    requestTimeLink,
    onErrorLink,
    authLink,
    new HttpLink({uri: "http://localhost:3033/graphql"},
    )])
});
