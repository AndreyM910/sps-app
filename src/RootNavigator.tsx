import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigation, AuthRouteOptions } from './auth-navigator/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileNavigation, ProfileRouteOptions } from './profile-navigator/ProfileNavigation';
import { getToken } from './shared/services/auth.service';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const RootStack = createBottomTabNavigator();
const combineRouteOptions: {
  // TODO: can`t find Screen params type
  [key: string]: any
} = {
  ...AuthRouteOptions,
  ...ProfileRouteOptions,
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
          <RootStack.Screen key={name} name={name} component={component} options={combineRouteOptions[name]}/>
        ))}
      </RootStack.Navigator>}
    </NavigationContainer>
  );
}

export default RootNavigation;
