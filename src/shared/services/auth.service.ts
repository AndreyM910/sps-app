import { gql} from '@apollo/client';
import { switchMap } from 'rxjs/operators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { from } from 'rxjs';
import { mutation, sendRequest } from './request.service';
import { UserInterface } from '../Interfaces/user.interface';

// Token

export function getToken() {
  return from(AsyncStorage.getItem('auth_token'));
}

export function setToken(token: string) {
  return from(AsyncStorage.setItem('auth_token', token));
}

export function removeToken() {
  return from(AsyncStorage.removeItem('auth_token'));
}

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

export function signUpRequest(signUpInput: SignUpInput, callback?: (res: UserInterface) => void) {
  return sendRequest(mutation({
    mutation: SIGN_UP,
    variables: {input: signUpInput},
  }).pipe(
    switchMap(async ({authToken}) => {
      return setToken(authToken)
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

export function signInRequest(signInInput: SignInInput, callback?: (res: any) => void) {
  return sendRequest(mutation({
    mutation: SIGN_IN,
    variables: {input: signInInput},
  }).pipe(
    switchMap(({authToken}) => {
      return setToken(authToken)
    }),
  ), callback);
}
