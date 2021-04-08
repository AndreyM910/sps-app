import { FlatList, View } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { meRequest, UpdateUserInput, updateUserRequest } from '../../shared/services/user.service';
import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import STextInputComponent, {
  SOnInputChange,
  STextInputComponentProps
} from '../../shared/components/STextInput/STextInputComponent';
import SSubmitButton from '../../shared/components/SSubmitButton/SSubmitButtonComponent';
import GooglePlacesInput, {
  GoogleAutocompleteComponentProps,
  OnAddressChange
} from '../../shared/components/GoogleAutocomplete/GoogleAutocompleteComponent';
import EditProfileStyles from './styles';

type InputListItem = STextInputComponentProps | GoogleAutocompleteComponentProps | any;

export default function EditProfileComponent() {
  const navigation = useNavigation();
  const [inputState, setInput] = useState<UpdateUserInput>({});

  const onInputChange: SOnInputChange = ({inputName, value}) => {
    setInput({...inputState, [inputName]: value});
  };

  const onAddressChange: OnAddressChange = ({address, coordinates}) => {
    setInput({...inputState, address, coordinates})
  };

  useEffect(() => {
    meRequest({}, (user) => {setInput(new UpdateUserInput(user))})
  }, []);

  const updateUser = () => {
    updateUserRequest(inputState, navigation.goBack);
  };

  // TODO: create InputListItem type
  const inputList: Array<InputListItem> = [
    {value: inputState.firstName, inputName: 'firstName', onInputChange, title: 'First Name'},
    {value: inputState.lastName, inputName: 'lastName', onInputChange, title: 'Last Name'},
    {value: inputState.email, inputName: 'email', onInputChange, title: 'Email'},
    {inputName: 'address', address: inputState.address, onChange: onAddressChange},
  ];

  return (
    <View style={EditProfileStyles.screenContainer}>
      <SHeaderComponent/>
      <View style={EditProfileStyles.formContainer}>
        <FlatList
          style={{flex: 1}}
          data={inputList}
          keyExtractor={item => item.inputName}
          renderItem={({item}) => {
            return item.inputName === 'address' ?
              <GooglePlacesInput {...item}/>
              : <STextInputComponent {...item}/>
          }}/>
        <SSubmitButton onSubmit={updateUser} text={'Save'}/>
      </View>
    </View>
  );
}
