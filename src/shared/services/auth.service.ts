import { gql} from '@apollo/client';
import { map } from 'rxjs/operators';
import { mutation, sendRequest } from './request.service';
import tokenService from './token.service';

// SignUp

export type SignUpInput = {
  firstName: string,
  email: string,
  password: string,
}

const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    signUp(signUpInput: $input) {firstName, email, authToken}
  }
`;

export function signUpRequest(signUpInput: SignUpInput, callback?: (authToken: string | null) => void) {
  return sendRequest(mutation({
    mutation: SIGN_UP,
    variables: {input: signUpInput},
  }).pipe(
    map(({authToken}) => {
      return tokenService.setToken(authToken)
    })
  ), callback);
}


// SignIn

export type SignInInput = {
  email: string,
  password: string,
}

const SIGN_IN = gql`
  mutation signIn($input: SignInInput!) {
    signIn(signInInput: $input) {firstName, email, authToken}
  }
`;

export function signInRequest(signInInput: SignInInput, callback?: (authToken: string | null) => void) {
  return sendRequest(mutation({
    mutation: SIGN_IN,
    variables: {input: signInInput},
  }).pipe(
    map(({authToken}) => {
      return tokenService.setToken(authToken)
}),
  ), callback);
}
