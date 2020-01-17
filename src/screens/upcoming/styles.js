import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 55,
    paddingTop: 5,
    marginBottom: 55,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  searchIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewHorizontal: {
    padding: 5,
  },
  scrollViewVertical: {
    padding: 5,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: 100,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    flex: 1,
    height: 40,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    flex: 1,
    margin: 0,
    marginRight: 10,
    height: 40,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#CCC',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
});

export default styles;
