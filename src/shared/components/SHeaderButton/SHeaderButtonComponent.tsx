import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import STextComponent from '../SText/STextComponent';
import SHeaderButtonStyles from './style';

interface SHeaderButtonProps {
  onPress: () => void;
  text: string;
}

export default function SHeaderButtonComponent({onPress, text}: SHeaderButtonProps) {
  return (
    <TouchableOpacity style={SHeaderButtonStyles.buttonContainer} onPress={onPress}>
      <STextComponent>
        {text}
      </STextComponent>
    </TouchableOpacity>)
}
