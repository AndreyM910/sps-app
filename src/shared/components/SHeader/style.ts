import { StyleSheet } from 'react-native';

const SHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  rightButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  }
});

export default SHeaderStyles;
