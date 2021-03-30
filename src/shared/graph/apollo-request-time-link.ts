import { ApolloLink } from '@apollo/client';

export const requestTimeLink = new ApolloLink((operation, forward) => {
  // Called before operation is sent to server
  operation.setContext({ start: new Date() });

  return forward(operation).map((data) => {
    // Called after server responds
    const time = new Date() - operation.getContext().start;
    console.log(`Operation ${operation.operationName} took ${time} to complete`);
    return data;
  });
});
