import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, AuthNavigationOptions } from './auth-navigator/AuthNavigation';
import { getToken } from './shared/services/auth.service';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigation, ProfileNavigationOptions } from './profile-navigator/ProfileNavigation';
import { colors } from './shared/styles/styles';
import { View } from 'react-native';

export const RootStack = createBottomTabNavigator();
const combineRouteOptions: {
  // TODO: can`t find Screen params type
  [key: string]: any
} = {
  ...AuthNavigationOptions,
  ...ProfileNavigationOptions,
};

enum AuthorizedStatus {
  UNAUTHORIZED,
  AUTHORIZED,
  LOADING,
}

function RootNavigation() {
  const [authorized, setAuthorize] = useState(AuthorizedStatus.LOADING);
  const $authorized = getToken().subscribe((token) => {
    setAuthorize(!!token ? AuthorizedStatus.AUTHORIZED : AuthorizedStatus.UNAUTHORIZED);
    $authorized.unsubscribe();
  });
  return (
    <NavigationContainer>
      {authorized !== AuthorizedStatus.LOADING &&
      <RootStack.Navigator initialRouteName={authorized === AuthorizedStatus.AUTHORIZED ? 'Profile' : 'SignIn'}>
        {
          // React navigation recommendation for nested navigators
          // have some doubts about it
        }
        {Object.entries({
          ...(authorized === AuthorizedStatus.AUTHORIZED  ? {...ProfileNavigation} : AuthNavigation),
        }).map(([name, component]) => (
          <RootStack.Screen key={name} name={name} component={component} options={combineRouteOptions[name] || nonHeaderRoute}/>
        ))}
      </RootStack.Navigator>}
    </NavigationContainer>
  );
}

export const nonHeaderRoute = {
  headerShown: false,
};


export default RootNavigation;
