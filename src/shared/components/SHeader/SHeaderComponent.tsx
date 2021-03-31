import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SIconComponent from '../SIcon/SIconComponent';
import SHeaderStyles from './style';
import { colors } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';

interface SHeaderProps {
  children: React.ReactNode
}

export default function SHeaderComponent({children}: SHeaderProps) {
  const navigation = useNavigation();
  return (<View style={SHeaderStyles.container}>
    <TouchableOpacity style={SHeaderStyles.backButton} onPress={navigation.goBack}>
      <SIconComponent name={'angle-left'} color={colors.black} size={30}/>
    </TouchableOpacity>
    <View style={SHeaderStyles.rightButtonGroup}>
      {children}
    </View>
  </View>)
}
