import { StyleSheet } from 'react-native';
import { colors, fontFamily, fullWidth, screenWidth } from '../../styles/styles';

const DefaultTextInputStyles = StyleSheet.create({
  viewContainer: {flexDirection: 'column', marginBottom: 8},
  primaryTextInput: {width: screenWidth - 60, borderBottomColor: colors.black, height: 40, borderBottomWidth: 1, borderRadius: 3, fontFamily}
});

export default DefaultTextInputStyles;
