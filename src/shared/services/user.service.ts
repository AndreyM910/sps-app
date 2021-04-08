import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import { mutation, query, sendRequest, watchQuery } from './request.service';
import { UserInterface } from '../Interfaces/user.interface';
import { CoordinatesInterface } from '../Interfaces/coordinates.interface';
import { BasicUserTemplate } from '../fragments/basic-user.template';

// ME

export const ME = gql`
  query me {
    me ${BasicUserTemplate}
  }
`;

export function meRequest(variables: {}, callback?: (user: UserInterface) => void) {
  return sendRequest(query({
    query: ME,
    variables: {},
  }), callback)
}

export function useMeRequest() {
  const [user, setUser] = useState<UserInterface>({firstName: '', email: '', authToken: ''});
  useEffect(() => {
    const $user = watchQuery({query: ME}).subscribe(setUser);
    return $user.unsubscribe;
  }, []);
  return user;
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

export const UPDATE_USER = gql`
    
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) ${BasicUserTemplate}
}
`;

export function updateUserRequest(updateUserInput: UpdateUserInput, callback?: (user: UserInterface) => void) {
  return sendRequest(mutation({
    mutation: UPDATE_USER,
    variables: {input: updateUserInput},
    refetchQueries: [{query: ME}]
  }), callback);
}
