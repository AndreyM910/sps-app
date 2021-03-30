import { gql} from '@apollo/client';
import { map } from 'rxjs/operators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Mutation } from './request.service';

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

export function SignUpRequest(signUpInput: SignUpInput) {
  Mutation({
    mutation: SIGN_UP,
    variables: {input: signUpInput},
  }).pipe(
    map(({authToken, ...user}) => {
      AsyncStorage.setItem('authToken', authToken);
      return user
    })
  ).subscribe((data) => {
    console.log(1, data)
  })
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

export function SignInRequest(signInInput: SignInInput) {
  return Mutation({mutation: SIGN_IN, variables: {input: signInInput}}).pipe(
    map(({authToken, ...user}) => {
      AsyncStorage.setItem('authToken', authToken);
      return user
    }),
  )
}
