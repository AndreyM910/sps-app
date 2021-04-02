import { setContext } from '@apollo/client/link/context';
import tokenService from '../services/token.service';


export const authLink = setContext((_, { headers }) => {
  const token = tokenService.getToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
