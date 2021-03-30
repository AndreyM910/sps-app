import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/STextInput/STextComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/SText/STextInputComponent';
import SignUpStyles from './styles';
import { colors } from '../../shared/styles/styles';
import { SignUpRequest, SignUpInput } from '../../services/auth.service';

export default function SignUpComponent() {
  const navigation = useNavigation();
  const toSignIn = () => navigation.navigate('SignIn');
  const [inputState, setInput] = useState<SignUpInput>({
    firstName: '',
    email: '',
    password: '',
  });
  const onInputChange: SOnInputChange = ({inputName, value}) => {
    setInput({...inputState, [inputName]: value});
  };

  const onSubmit = () => {
    SignUpRequest(inputState)
  }
  return (
    <View style={SignUpStyles.viewContainer}>
      <Text style={SignUpStyles.logo}>Logo</Text>
      <View>
        <STextInputComponent onInputChange={onInputChange} inputName={'firstName'} title={'First Name'} />
        <STextInputComponent onInputChange={onInputChange} inputName={'email'} title={'Email'} />
        <STextInputComponent onInputChange={onInputChange} inputName={'password'} title={'Password'} />
        <TouchableOpacity style={{marginTop: 10, borderWidth: 1, borderRadius: 5, borderColor: colors.gray, alignItems: 'center', padding: 4}} onPress={onSubmit}>
          <STextComponent>
            Send
          </STextComponent>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toSignIn}>
        <STextComponent>
          I have account
        </STextComponent>
      </TouchableOpacity>
    </View>
  );
}
