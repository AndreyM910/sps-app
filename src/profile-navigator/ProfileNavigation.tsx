import * as React from 'react';
import UserProfileComponent from './user-profile-screen/UserProfileComponent';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileComponent from './edit-profile-screen/EditProfileComponent';
import { nonHeaderRoute } from '../shared/utils/nonHeaderRoute';

export const ProfileNavigation = {
  Profile: ProfileStackNavigation,
};

export const ProfileNavigationOptions: {[key: string]: any} = {
  Profile: nonHeaderRoute,
};

const ProfileScreens = {
  UserProfile: UserProfileComponent,
  EditProfile: EditProfileComponent,
};

const ProfileStack = createStackNavigator();

const ProfileRouteOptions: {[key: string]: any} = {
  UserProfile: nonHeaderRoute,
  EditProfile: nonHeaderRoute,
};

export function ProfileStackNavigation() {
  return <ProfileStack.Navigator initialRouteName={'UserProfile'}>
    {Object.entries(ProfileScreens).map(([name, component]) => (
      <ProfileStack.Screen key={name} name={name} component={component} options={ProfileRouteOptions[name]}/>
    ))}
  </ProfileStack.Navigator>
}
