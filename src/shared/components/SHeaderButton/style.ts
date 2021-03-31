import { StyleSheet } from 'react-native';
import { colors, fontFamily2 } from '../../styles/styles';

const SHeaderButtonStyles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.lightGray,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 8,
  },
});

export default SHeaderButtonStyles;
