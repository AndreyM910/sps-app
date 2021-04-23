import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation, AuthNavigationOptions } from './auth-navigator/AuthNavigation';
import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigation, ProfileNavigationOptions } from './profile-navigator/ProfileNavigation';
import tokenService, { AuthorizedStatus } from './shared/services/token.service';
import { SearchNavigation, SearchNavigationOptions } from './search-navigator/SearchNavigation';

export const RootStack = createBottomTabNavigator();
const combineRouteOptions: {
  // TODO: can`t find Screen params type
  [key: string]: any
} = {
  ...AuthNavigationOptions,
  ...ProfileNavigationOptions,
  ...SearchNavigationOptions,
};

function RootNavigation() {
  const [authorized, setAuthorize] = useState(AuthorizedStatus.LOADING);
  useEffect(() => {
    const $token = tokenService.subscribeToAuthStatus(setAuthorize);
    return () => $token.unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      {authorized !== AuthorizedStatus.LOADING &&
      <RootStack.Navigator initialRouteName={authorized === AuthorizedStatus.AUTHORIZED ? 'Profile' : 'SignIn'}>
        {
          // React navigation recommendation for nested navigators
          // have some doubts about it
        }
        {Object.entries({
          ...(authorized === AuthorizedStatus.AUTHORIZED  ? {...ProfileNavigation, ...SearchNavigation} : AuthNavigation),
        }).map(([name, component]) => (
          <RootStack.Screen key={name} name={name} component={component} options={combineRouteOptions[name]}/>
        ))}
      </RootStack.Navigator>}
    </NavigationContainer>
  );
}

export default RootNavigation;
