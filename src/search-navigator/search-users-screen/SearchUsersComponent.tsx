import { View } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/components/SText/STextComponent';
import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import SHeaderButtonComponent from '../../shared/components/SHeaderButton/SHeaderButtonComponent';
import SearchUsersStyles from './styles';

export default function SearchUsersComponent() {
  const navigation = useNavigation();
  const toEditProfile = () => navigation.navigate('SearchFilters');
  return (
    <View style={SearchUsersStyles.screenContainer}>
      <SHeaderComponent hideBackButton={true}>
        <SHeaderButtonComponent text={'Filter'} onPress={toEditProfile}/>
      </SHeaderComponent>
      <STextComponent>
        Users in radius
      </STextComponent>
    </View>
  );
}
