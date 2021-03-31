import { gql} from '@apollo/client';
import { query, sendRequest } from './request.service';
import { UserInterface } from '../Interfaces/user.interface';

// SignUp

export type SignUpInput = {
  firstName: string,
  email: string,
  password: string,
}

const ME = gql`
  query me {
    me {firstName, email, authToken}
  }
`;


export function meRequest(variables: {}, callback: (user: UserInterface) => void) {
  return sendRequest(query({
    query: ME,
    variables: {},
  }), callback)
}
