import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Rating from '../rating';

const Featured = ({ movie, onPress }) => {
  if (!movie) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.cover}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
          }}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {movie.title || movie.original_name}
      </Text>
      <Rating rating={movie.vote_average / 2} />
    </TouchableOpacity>
  );
};

export default Featured;
