import { gql} from '@apollo/client';
import { mutation, query, sendRequest } from './request.service';
import { UserInterface } from '../Interfaces/user.interface';
import { map } from 'rxjs/operators';
import tokenService from './token.service';

// ME

const ME = gql`
  query me {
    me {firstName, lastName, email, authToken}
  }
`;


export function meRequest(variables: {}, callback: (user: UserInterface) => void) {
  return sendRequest(query({
    query: ME,
    variables: {},
  }), callback)
}


// UpdateUser

export class UpdateUserInput {
  constructor(
    {
      firstName,
      lastName,
      email,
    }: UpdateUserInput
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  firstName?: string;
  lastName?: string;
  email?: string;
}

const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {firstName, email, authToken}
}
`;

export function updateUserRequest(updateUserInput: UpdateUserInput, callback?: (authToken: string | null) => void) {
  return sendRequest(mutation({
    mutation: UPDATE_USER,
    variables: {input: updateUserInput},
  }), callback);
}
