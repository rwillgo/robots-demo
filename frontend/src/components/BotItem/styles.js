import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  purpose: {
    fontSize: 20,
    fontWeight: '400',
  },
  spacer: {
    height: 5,
  },
});

export default styles;
