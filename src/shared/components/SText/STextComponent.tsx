import { Text, View, TextInput, StyleProp, TextStyle, TextProps } from 'react-native';
import * as React from 'react';
import DefaultTextInputStyles from './styles';
import STextStyles from './styles';

interface STextInputComponentProps extends TextProps {
  children: React.ReactNode
}

export default function STextComponent({style, children}: STextInputComponentProps) {
  return (
      <Text style={[STextStyles.textStyle]}>{children}</Text>
  );
}
