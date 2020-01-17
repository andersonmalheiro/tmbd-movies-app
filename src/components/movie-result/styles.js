import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 12,
  },
  info: {
    marginLeft: 12,
  },
  imageContainer: {
    height: 100,
    width: 70,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    borderRadius: 6,
  },
  genresContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genre: {
    color: '#777777',
    fontSize: 12,
  },
});

export default styles;
