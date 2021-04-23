import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';

import SHeaderComponent from '../../shared/components/SHeader/SHeaderComponent';
import STextInputComponent, { SOnInputChange } from '../../shared/components/STextInput/STextInputComponent';
import SearchFiltersStyles from './styles';

export default function SearchFilterComponent() {
  const [inputState, setInput] = useState({});

  const onInputChange: SOnInputChange = ({inputName, value}) => {
    setInput({...inputState, [inputName]: value});
  };

  return (
    <View style={SearchFiltersStyles.screenContainer}>
      <SHeaderComponent/>
      <STextInputComponent inputName={'radius'} onInputChange={onInputChange} title={'Radius'}/>
    </View>
  );
}
