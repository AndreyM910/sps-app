import * as React from 'react';
import SignUpComponent from './sign-up-screen/SignUpComponent';
import SignInComponent from './sign-in-screen/SignInComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { nonHeaderRoute } from '../shared/utils/nonHeaderRoute';


export const AuthNavigation = {
  Auth: AuthStackNavigation,
};

export const AuthNavigationOptions: {[key: string]: any} = {
  Auth: nonHeaderRoute,
};

const AuthScreens = {
  SignIn: SignInComponent,
  SignUp: SignUpComponent,
};

const AuthRouteOptions: {[key: string]: any} = {
  SignIn: nonHeaderRoute,
  SignUp: nonHeaderRoute,
};

const AuthStack = createStackNavigator();

export function AuthStackNavigation() {
  return <AuthStack.Navigator initialRouteName={'SingIn'}>
    {Object.entries(AuthScreens).map(([name, component]) => (
      <AuthStack.Screen key={name} name={name} component={component} options={AuthRouteOptions[name] || nonHeaderRoute}/>
    ))}
  </AuthStack.Navigator>
}
