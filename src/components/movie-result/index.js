import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { genres } from '../../utils/genres';
import Rating from '../rating';

const MovieResult = ({ movie, onPress }) => {
  if (!movie) {
    return null;
  }

  const parsedGenres = [];
  if (movie.hasOwnProperty('genre_ids') && Array.isArray(movie.genre_ids)) {
    movie.genre_ids.map(item => parsedGenres.push(genres[item]));
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default MovieResult;
