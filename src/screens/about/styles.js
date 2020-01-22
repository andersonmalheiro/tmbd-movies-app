import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    position: 'relative',
  },
  headerBG: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: -1,
  },
  imageContainer: {
    height: 180,
    width: 120,
    borderRadius: 12,
    elevation: 5,
    backgroundColor: 'white',
  },
  imageCover: {
    flex: 1,
    borderRadius: 6,
  },
  imageBG: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  overview: {
    fontSize: 12,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  collumn: {
    flex: 1,
  },
});

export default styles;
