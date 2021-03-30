import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import STextComponent from '../STextInput/STextComponent';
import SSubmitButtonStyles from './style';

interface SSubmitButtonProps {
  onSubmit: () => void;
  text: string;
}

export default function SSubmitButton({onSubmit, text}: SSubmitButtonProps) {
  return (
    <TouchableOpacity style={SSubmitButtonStyles.submitButton} onPress={onSubmit}>
      <STextComponent>
        {text}
      </STextComponent>
    </TouchableOpacity>)
}
