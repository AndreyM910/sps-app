import { map } from 'rxjs/operators';
import { setContext } from '@apollo/client/link/context';

import { getToken } from '../services/auth.service';

export const authLink = setContext((operation) => {
  const token$ = getToken().pipe(
    map(token => {
      return {
        headers: {
          authorization: `Bearer ${token}` || null,
        },
      };
    }),
  );
  return new Promise((next, error) => {
    token$.subscribe({next, error});
  });
});
