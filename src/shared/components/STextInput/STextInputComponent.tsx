import { Text, View, TextInput, StyleProp, TextStyle, TextInputProps } from 'react-native';
import * as React from 'react';
import DefaultTextInputStyles from './styles';
import STextComponent from '../SText/STextComponent';

export type SOnInputChange = (value: {inputName: string, value: string}) => void;
interface STextInputComponentProps extends TextInputProps {
  inputName: string;
  onInputChange: SOnInputChange;
  title: string;
  textInputStyle?: StyleProp<TextStyle>
  titleStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<TextStyle>
}

export default function STextInputComponent(
  {
    title,
    textInputStyle,
    containerStyle,
    titleStyle,
    inputName,
    onInputChange,
    ...textInputProps
  }: STextInputComponentProps) {
  const onChange: (text: string) => void = (value) => {
    onInputChange({inputName, value})
  };
  return (
    <View style={[DefaultTextInputStyles.viewContainer, containerStyle]}>
      <STextComponent style={titleStyle}>{title}</STextComponent>
      <TextInput
        onChangeText={onChange}
        style={[DefaultTextInputStyles.primaryTextInput, textInputStyle]}
        {...textInputProps}
      />
    </View>
  );
}
