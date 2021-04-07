import { gql} from '@apollo/client';
import { mutation, query, sendRequest } from './request.service';
import { UserInterface } from '../Interfaces/user.interface';
import { CoordinatesInterface } from '../Interfaces/coordinates.interface';

// ME

const ME = gql`
  query me {
    me {firstName, lastName, email, authToken, coordinates {latitude, longitude}, address}
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
      address,
      coordinates,
    }: UpdateUserInput
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.coordinates = coordinates;
  }
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
  coordinates?: CoordinatesInterface;
}

const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {firstName, lastName, email, authToken, coordinates {latitude, longitude}, address}
}
`;

export function updateUserRequest(updateUserInput: UpdateUserInput, callback?: (authToken: string | null) => void) {
  return sendRequest(mutation({
    mutation: UPDATE_USER,
    variables: {input: updateUserInput},
  }), callback);
}
