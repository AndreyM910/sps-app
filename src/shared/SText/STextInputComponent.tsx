import { Text, View, TextInput, StyleProp, TextStyle, TextInputProps } from 'react-native';
import * as React from 'react';
import DefaultTextInputStyles from './styles';
import STextComponent from '../STextInput/STextComponent';

interface STextInputComponentProps extends TextInputProps {
  title: string;
  textInputStyle?: StyleProp<TextStyle>
  titleStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<TextStyle>
}

export default function STextInputComponent({title, textInputStyle, containerStyle, titleStyle, ...textInputProps}: STextInputComponentProps) {
  return (
    <View style={[DefaultTextInputStyles.viewContainer, containerStyle]}>
      <STextComponent style={titleStyle}>{title}</STextComponent>
      <TextInput
        style={[DefaultTextInputStyles.primaryTextInput, textInputStyle]}
        {...textInputProps}
      />
    </View>
  );
}
