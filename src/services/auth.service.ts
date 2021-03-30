import { gql} from '@apollo/client';
import { apolloClient } from '../shared/graph/apollo-client';

export type SignUpInput = {
  firstName: string,
  email: string,
  password: string,
}

const SIGN_UP = gql`
mutation SignUp($input: SignUpInput!) {
  signUp(signUpInput: $input) {firstName, email, authToken}
}
`;

export function SignUpRequest(signUpInput: SignUpInput) {
  apolloClient.mutate({
    mutation: SIGN_UP,
    variables: {input: signUpInput},
  }).then(console.log).catch((err, es) => {
    console.log(console.log(err))
  })
}
