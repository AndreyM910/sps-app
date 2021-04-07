import { ScrollView, View } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { meRequest, UpdateUserInput, updateUserRequest } from '../../shared/services/user.service';
import SignInStyles from './styles';
import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/components/STextInput/STextInputComponent';
import SSubmitButton from '../../shared/components/SSubmitButton/SSubmitButtonComponent';
import EditProfileStyles from './styles';

export default function EditProfileComponent() {
  const [inputState, setInput] = useState<UpdateUserInput>({});

  const onInputChange: SOnInputChange = ({inputName, value}) => {
    setInput({...inputState, [inputName]: value});
  };

  useEffect(() => {
    meRequest({}, (user) => {setInput(new UpdateUserInput(user))})
  }, []);

  const updateUser = () => {
    updateUserRequest(inputState)
  };

  return (
    <View style={SignInStyles.screenContainer}>
      <SHeaderComponent/>
      <View style={EditProfileStyles.formContainer}>
      <ScrollView>
      <STextInputComponent value={inputState.firstName} inputName={'firstName'} onInputChange={onInputChange} title={'First Name'}/>
      <STextInputComponent value={inputState.lastName} inputName={'lastName'} onInputChange={onInputChange} title={'Last Name'}/>
      <STextInputComponent value={inputState.email} inputName={'email'} onInputChange={onInputChange} title={'Email'}/>
      </ScrollView>
      <SSubmitButton onSubmit={updateUser} text={'Save'}/>
      </View>
    </View>
  );
}
