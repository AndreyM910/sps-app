import {
  View,
  TextInput,
  StyleProp,
  TextStyle,
  TextInputProps, TextInputComponent,
} from 'react-native';
import * as React from 'react';
import DefaultTextInputStyles from './styles';
import STextComponent from '../SText/STextComponent';

export interface SAddressInputComponentProps extends TextInputProps {
  innerRef?: React.ForwardedRef<TextInput>;
  title: string;
  textInputStyle?: StyleProp<TextStyle>
  titleStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<TextStyle>
}

export default function SAddressInputComponent(
  {
    title,
    textInputStyle,
    containerStyle,
    titleStyle,
    style,
    innerRef,
    ...textInputProps
  }: SAddressInputComponentProps) {
  return (
    <View style={[DefaultTextInputStyles.viewContainer, containerStyle]}>
      <STextComponent style={titleStyle}>{title}</STextComponent>
      <TextInput
        ref={innerRef}
        style={[DefaultTextInputStyles.primaryTextInput, textInputStyle]}
        {...textInputProps}
      />
    </View>
  );
}
