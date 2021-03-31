import * as React from 'react';
import { colors } from '../shared/styles/styles';
import UserProfileComponent from './user-profile-screen/UserProfileComponent';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStack } from '../RootNavigator';
import EditProfileComponent from './edit-profile-screen/EditProfileComponent';

export const ProfileNavigation = {
  Profile: ProfileStackNavigation,
};

const ProfileScreens = {
  UserProfile: UserProfileComponent,
  EditProfile: EditProfileComponent,
};

const ProfileStack = createStackNavigator();

const nonHeader = {
  headerLeft: null,
  headerStyle: {
    backgroundColor: colors.backgroundColor,
    shadowOffset: {width: 0, height: 0},
  },
  headerTitle: null,
};

export const ProfileRouteOptions: {[key: string]: any} = {
  UserProfile: nonHeader,
  EditProfile: nonHeader,
};

export function ProfileStackNavigation() {
  return <ProfileStack.Navigator initialRouteName={'UserProfile'}>
    {Object.entries(ProfileScreens).map(([name, component]) => (
      <RootStack.Screen key={name} name={name} component={component} options={ProfileRouteOptions[name]}/>
    ))}
  </ProfileStack.Navigator>
}
