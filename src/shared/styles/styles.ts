import { Text, Animated, Dimensions, Platform } from 'react-native';

export const colors = {
  black: '#110',
  gray: '#776',
  lightGray: '#BBA',
  backgroundColor: '#FFE',
  white: '#FFF',
  blue: '#157',
  green: '#287',
  lightBlue: '#5CE',
};

export const fontFamily = Platform.OS === "ios" ? 'Inconsolata' : 'Inconsolata-VariableFont_wdth,wght.ttf';
export const fontFamily2 = Platform.OS === "ios" ? 'New Tegomin' : 'NewTegomin-Regular.ttf';

export const fullWidth = Dimensions.get('window').width;
export const screenWidth = fullWidth - 20;
export const screenContainer = {
  flex: 1,
  padding: 10,
  backgroundColor: colors.backgroundColor,
};
