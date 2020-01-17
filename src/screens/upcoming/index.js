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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { upcomingMovies } from '../../api/search';
import * as Animatable from 'react-native-animatable';

import Reactotron from 'reactotron-react-native';

const Upcoming = () => {
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
              <MovieResult key={index} movie={movie} />
            ))}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Upcoming;
