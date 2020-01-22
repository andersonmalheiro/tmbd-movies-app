import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  SafeAreaView,
  Text,
  ScrollView,
} from 'react-native';
import styles from './styles';
import MovieResult from '../../components/movie-result';
import { upcomingMovies } from '../../api/search';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../about';
import Reactotron from 'reactotron-react-native';

const Upcoming = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    getUpcoming();
  }, []);

  const getUpcoming = async () => {
    setLoading(true);
    await upcomingMovies()
      .then(response => {
        setLoading(false);
        if (response.hasOwnProperty('results')) {
          setMovies(response.results);
        }
      })
      .catch(error => {
        setLoading(false);
        setMovies([]);
      });
  };

  const showDetails = movieID => {
    navigation.navigate('About', { movieID });
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* Header */}
      <View style={styles.sectionTitle}>
        <Animatable.View animation={'slideInLeft'}>
          <Text style={styles.title}>TMDB</Text>
        </Animatable.View>
      </View>
      {/* Header */}

      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Próximos lançamentos</Text>
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View style={styles.scrollViewVertical}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            {movies.map((movie, index) => (
              <MovieResult
                key={index}
                movie={movie}
                onPress={() => showDetails(movie.id)}
              />
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

const UpcomingStack = createStackNavigator({
  Upcoming: {
    screen: Upcoming,
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

export default UpcomingStack;
