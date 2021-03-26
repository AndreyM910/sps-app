import { Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/STextInput/STextComponent';
import STextInputComponent from '../../shared/SText/STextInputComponent';
import SignInStyles from './styles';

export default function SignInComponent() {
  const navigation = useNavigation();
  const toSignUp = () => navigation.navigate('SignUp');
  return (
    <View style={SignInStyles.viewContainer}>
      <Text style={SignInStyles.logo}>Logo</Text>
      <View>
        <STextInputComponent title={'Email'} />
        <STextInputComponent title={'Password'} />
      </View>
      <TouchableOpacity onPress={toSignUp}>
        <STextComponent>
          Create account
        </STextComponent>
      </TouchableOpacity>
    </View>
  );
}
