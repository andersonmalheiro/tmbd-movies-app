import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Featured from '../../components/featured';
import MovieResult from '../../components/movie-result';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { trendingMovies, searchByName } from '../../api/search';
import * as Animatable from 'react-native-animatable';

import { createStackNavigator } from 'react-navigation-stack';
import About from '../about';
import Reactotron from 'reactotron-react-native';

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loadingTrending, setLoadingTrending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    setLoadingTrending(true);
    await trendingMovies()
      .then(response => {
        setLoadingTrending(false);
        if (response.hasOwnProperty('results')) {
          setTrending(response.results);
        }
      })
      .catch(error => {
        setLoadingTrending(false);
        setTrending([]);
      });
  };

  const getMovies = async (name, page = 1) => {
    setLoading(true);
    await searchByName(name, page)
      .then(response => {
        setLoading(false);
        if (response.hasOwnProperty('results')) {
          if (Array.isArray(response.results)) {
            if (response.results.length) {
              setEmpty(false);
              setMovies(response.results);
            } else {
              setEmpty(true);
            }
          }
        }
      })
      .catch(error => {
        setLoading(false);
        setEmpty(false);
        setMovies([]);
      });
  };

  const toggleSearch = () => {
    setShowSearch(showSearch ? false : true);
    if (showSearch) {
      setQuery('');
      setMovies([]);
      setEmpty(false);
    }
    Reactotron.log(movies, query);
  };

  const handleTextChange = value => {
    setQuery(value);
  };

  const showDetails = movieID => {
    navigation.navigate('About', { movieID });
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* Header */}
      <View style={styles.sectionTitle}>
        {!showSearch && (
          <Animatable.View
            // style={styles.searchBox}
            animation={showSearch ? 'slideOutLeft' : 'slideInLeft'}>
            <Text style={styles.title}>TMDB</Text>
          </Animatable.View>
        )}
        {showSearch && (
          <Animatable.View
            style={styles.searchBox}
            animation={showSearch ? 'slideInRight' : 'slideOutRight'}>
            <TextInput
              placeholder="Busque por nome..."
              style={styles.searchInput}
              onChangeText={text => handleTextChange(text)}
              onSubmitEditing={e => getMovies(query)}
              value={query}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={toggleSearch}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
          </Animatable.View>
        )}

        {!showSearch && (
          <TouchableOpacity style={styles.searchButton} onPress={toggleSearch}>
            <Icon name={'search'} style={styles.searchIcon} />
          </TouchableOpacity>
        )}
      </View>
      {/* Header */}

      {/* Movie results */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : empty ? (
        <View style={styles.loadingContainer}>
          <Text>Ops... Não encontramos nenhum resultado para a sua busca.</Text>
        </View>
      ) : (
        <View style={styles.scrollViewHorizontal}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            horizontal={true}>
            {movies.map((movie, index) => (
              <Featured
                key={index}
                movie={movie}
                onPress={() => showDetails(movie.imdb_id || movie.id)}
              />
            ))}
          </ScrollView>
        </View>
      )}
      {/* Movie results */}

      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Em alta</Text>
      </View>
      {loadingTrending ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={styles.scrollViewVertical}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {trending.map((movie, index) => (
              <MovieResult
                key={index}
                movie={movie}
                onPress={() => showDetails(movie.imdb_id || movie.id)}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'Detalhes',
    },
  },
});

export default HomeStack;
