import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    maxWidth: 120,
    flex: 1,
  },
  cover: {
    borderRadius: 12,
    height: 180,
    width: 120,
    elevation: 5,
  },
  image: {
    flex: 1,
    borderRadius: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'left',
  },
  starContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  star: {
    color: '#ffac30',
    fontSize: 14,
  },
});

export default styles;
