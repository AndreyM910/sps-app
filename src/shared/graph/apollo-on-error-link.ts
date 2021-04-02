import { onError } from '@apollo/client/link/error';
import { showToast } from '../components/SToast/SToast';
import { removeToken } from '../services/auth.service';

export const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      showToast(message);
      if (extensions?.exception.status === 401) {
        const $removeToken = removeToken().subscribe(() => $removeToken.unsubscribe)
      }

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
