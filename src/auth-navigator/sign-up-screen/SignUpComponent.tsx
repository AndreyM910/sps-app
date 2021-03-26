import { Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import SignUpStyles from './styles';
import STextComponent from '../../shared/STextInput/STextComponent';
import STextInputComponent from '../../shared/SText/STextInputComponent';
import { useNavigation } from '@react-navigation/native';

export default function SignUpComponent() {
  const navigation = useNavigation();
  const toSignIn = () => navigation.navigate('SignIn');
  return (
    <View style={SignUpStyles.viewContainer}>
      <Text style={SignUpStyles.logo}>Logo</Text>
      <View>
        <STextInputComponent title={'First Name'} />
        <STextInputComponent title={'Email'} />
        <STextInputComponent title={'Password'} />
      </View>
      <TouchableOpacity onPress={toSignIn}>
        <STextComponent>
          I have account
        </STextComponent>
      </TouchableOpacity>
    </View>
  );
}
