import { Text, TextProps } from 'react-native';
import * as React from 'react';
import STextStyles from './styles';

interface STextInputComponentProps extends TextProps {
  children: React.ReactNode
}

export default function STextComponent({style, children}: STextInputComponentProps) {
  return (
      <Text style={[STextStyles.textStyle]}>{children}</Text>
  );
}
