import { onError } from '@apollo/client/link/error';
import { showToast } from '../components/SToast/SToast';

export const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      showToast(message);
        console.log(
          `[GraphQL error]: Message: ${message}, Path: ${path}`
        )
      }
    );
  if (networkError) {
    showToast(networkError.message);
    console.log(`[Network error]: ${networkError}`);
  }
});
