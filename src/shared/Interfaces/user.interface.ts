import { CoordinatesInterface } from './coordinates.interface';

export interface UserInterface {
  firstName: string;
  lastName?: string;
  authToken: string;
  email: string;
  coordinates?: CoordinatesInterface
}
