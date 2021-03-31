import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SHeaderStyles from './style';

interface SHeaderProps {
  children: React.ReactNode
}

export default function SHeaderComponent({children}: SHeaderProps) {
  return (<View style={SHeaderStyles.container}>
    <TouchableOpacity>

    </TouchableOpacity>
    <View>
      {children}
    </View>
  </View>)
}
