import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigation, AuthRouteOptions } from './auth-navigator/AuthNavigation';

export const RootStack = createStackNavigator();
const combineRouteOptions: {
  // TODO: can`t find Screen params type
  [key: string]: any
} = {
  ...AuthRouteOptions,
};

function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'SignIn'}>
        {
          // React navigation recommendation for nested navigators
          // have some doubts about it
        }
        {Object.entries({
          ...AuthNavigation
        }).map(([name, component]) => (
          <RootStack.Screen key={name} name={name} component={component} options={combineRouteOptions[name]}/>
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;