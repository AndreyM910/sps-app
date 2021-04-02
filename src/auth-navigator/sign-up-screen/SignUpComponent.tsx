import * as React from 'react';
import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import STextComponent from '../../shared/components/SText/STextComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/components/STextInput/STextInputComponent';
import SSubmitButton from '../../shared/components/SSubmitButton/SSubmitButtonComponent';
import { SignUpInput, signUpRequest } from '../../shared/services/auth.service';
import SignUpStyles from './styles';

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
    signUpRequest(inputState);
  };

  return (
    <View style={SignUpStyles.viewContainer}>
      <Text style={SignUpStyles.logo}>Logo</Text>
      <View>
        <STextInputComponent onInputChange={onInputChange} inputName={'firstName'} title={'First Name'} />
        <STextInputComponent onInputChange={onInputChange} inputName={'email'} title={'Email'} />
        <STextInputComponent onInputChange={onInputChange} inputName={'password'} title={'Password'} />
        <SSubmitButton text={'Submit'} onSubmit={onSubmit}/>
      </View>
      <TouchableOpacity onPress={toSignIn}>
        <STextComponent>
          I have an account
        </STextComponent>
      </TouchableOpacity>
    </View>
  );
}
