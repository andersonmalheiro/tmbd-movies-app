import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Rating from '../rating';

const Featured = ({ movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
          }}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {movie.title}
      </Text>
      <Rating rating={movie.vote_average / 2} />
    </View>
  );
};

export default Featured;
