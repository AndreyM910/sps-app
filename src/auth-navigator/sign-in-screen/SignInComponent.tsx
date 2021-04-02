import { Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/components/SText/STextComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/components/STextInput/STextInputComponent';
import SSubmitButton from '../../shared/components/SSubmitButton/SSubmitButtonComponent';
import { SignInInput, signInRequest } from '../../shared/services/auth.service';
import SignInStyles from './styles';

export default function SignInComponent() {
  const navigation = useNavigation();
  const toSignUp = () => navigation.navigate('SignUp');

  const [inputState, setInput] = useState<SignInInput>({
    email: '',
    password: '',
  });

  const onInputChange: SOnInputChange = ({inputName, value}) => {
    setInput({...inputState, [inputName]: value});
  };

  const onSubmit = () => {
    signInRequest(inputState);
  };
  return (
    <View style={SignInStyles.viewContainer}>
      <Text style={SignInStyles.logo}>Logo</Text>
      <View>
        <STextInputComponent inputName={'email'} onInputChange={onInputChange} title={'Email'} />
        <STextInputComponent inputName={'password'} onInputChange={onInputChange} title={'Password'} />
        <SSubmitButton onSubmit={onSubmit} text={'Submit'}/>
      </View>
      <TouchableOpacity onPress={toSignUp}>
        <STextComponent>
          Create account
        </STextComponent>
      </TouchableOpacity>
    </View>
  );
}
