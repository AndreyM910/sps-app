import { View } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/components/SText/STextComponent';
import { meRequest } from '../../shared/services/user.service';
import SignInStyles from './styles';
import { UserInterface } from '../../shared/Interfaces/user.interface';
import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import SHeaderButtonComponent from '../../shared/components/SHeaderButton/SHeaderButtonComponent';
import tokenService from '../../shared/services/token.service';

export default function EditProfileComponent() {
  const navigation = useNavigation();
  const toSignUp = () => navigation.navigate('SignUp');
  const toEditProfile = () => navigation.navigate('EditProfile');
  const logOut = () => tokenService.removeToken();
  const [user, setUser] = useState<UserInterface>({firstName: '', email: '', authToken: ''});
  useEffect(() => {
    meRequest({}, setUser)
  });
  return (
    <View style={SignInStyles.screenContainer}>
      <SHeaderComponent>
      </SHeaderComponent>
      <STextComponent>
        Hello {user.firstName}
      </STextComponent>
      <STextComponent>
        Email: {user.email}
      </STextComponent>
      <STextComponent>
        Coordinates: {user.lastName}
      </STextComponent>
    </View>
  );
}
