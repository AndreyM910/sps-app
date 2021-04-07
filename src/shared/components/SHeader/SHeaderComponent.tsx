import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SIconComponent from '../SIcon/SIconComponent';
import SHeaderStyles from './style';
import { colors } from '../../styles/styles';
import { useNavigation } from '@react-navigation/native';

interface SHeaderProps {
  children?: React.ReactNode,
  hideBackButton?: boolean,
}

export default function SHeaderComponent({children, hideBackButton}: SHeaderProps) {
  const navigation = useNavigation();
  return (<View style={SHeaderStyles.container}>
    {hideBackButton ? <View/> : <TouchableOpacity style={SHeaderStyles.backButton} onPress={navigation.goBack}>
      <SIconComponent name={'angle-left'} color={colors.black} size={30}/>
    </TouchableOpacity>}
    <View style={SHeaderStyles.rightButtonGroup}>
      {children}
    </View>
  </View>)
}
