import * as React from 'react';
import SignUpComponent from './sign-up-screen/SignUpComponent';
import SignInComponent from './sign-in-screen/SignInComponent';
import { colors } from '../shared/styles/styles';

export const AuthNavigation = {
  SignIn: SignInComponent,
  SignUp: SignUpComponent,
};

const nonHeader = {
  headerLeft: null,
  headerStyle: {
    backgroundColor: colors.backgroundColor,
    shadowOffset: {width: 0, height: 0},
  },
  headerTitle: null,
};

export const AuthRouteOptions = {
  SignIn: nonHeader,
  SignUp: nonHeader,
};
