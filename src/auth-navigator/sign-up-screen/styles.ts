import { StyleSheet } from 'react-native';
import { colors, fontFamily2 } from '../../shared/styles/styles';

const SignUpStyles = StyleSheet.create({
  logo: {fontFamily: fontFamily2, fontSize: 32},
  viewContainer: {flex: 1, backgroundColor: colors.backgroundColor, justifyContent: 'space-around', alignItems: 'center'},
});

export default SignUpStyles;
