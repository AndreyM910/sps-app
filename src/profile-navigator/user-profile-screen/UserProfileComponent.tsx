import { View } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/components/SText/STextComponent';
import { useMeRequest } from '../../shared/services/user.service';
import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import SHeaderButtonComponent from '../../shared/components/SHeaderButton/SHeaderButtonComponent';
import tokenService from '../../shared/services/token.service';
import ProfileStyles from './styles';

export default function UserProfileComponent() {
  const navigation = useNavigation();
  const logOut = () => tokenService.removeToken();
  const toEditProfile = () => navigation.navigate('EditProfile');
  const user = useMeRequest();
  return (
    <View style={ProfileStyles.screenContainer}>
      <SHeaderComponent hideBackButton={true}>
        <SHeaderButtonComponent text={'Logout'} onPress={logOut}/>
        <SHeaderButtonComponent text={'Edit'} onPress={toEditProfile}/>
      </SHeaderComponent>
      <STextComponent>
        Hello {user.firstName}
      </STextComponent>
      <STextComponent>
        Email: {user.email}
      </STextComponent>
      <STextComponent>
        Address: {user.address}
      </STextComponent>
    </View>
  );
}
