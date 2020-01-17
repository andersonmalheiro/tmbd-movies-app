import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { genres } from '../../utils/genres';
import Rating from '../rating';

const MovieResult = ({ movie }) => {
  if (!movie) {
    return null;
  }

  const parsedGenres = [];
  if (movie.hasOwnProperty('genre_ids') && Array.isArray(movie.genre_ids)) {
    movie.genre_ids.map(item => parsedGenres.push(genres[item]));
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title || movie.original_name}</Text>
        <Rating rating={movie.vote_average / 2} />
        <View style={styles.genresContainer}>
          <Text>{parsedGenres.join(', ')}</Text>
        </View>
        <View style={styles.genresContainer}>
          <Text>Estréia: {movie.release_date}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieResult;
