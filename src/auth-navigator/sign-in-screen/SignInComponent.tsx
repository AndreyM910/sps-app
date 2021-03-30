import { Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SignInInput, SignInRequest } from '../../shared/services/auth.service';
import STextComponent from '../../shared/components/STextInput/STextComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/components/SText/STextInputComponent';
import SSubmitButton from '../../shared/components/SSubmitButton/SSubmitButtonComponent';
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
    const a = SignInRequest(inputState).subscribe(user => {
      console.log(user)
      a.unsubscribe()
    })
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
