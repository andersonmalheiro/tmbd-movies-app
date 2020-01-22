import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, Image, ScrollView } from 'react-native';
import { getByID } from '../../api/search';
import Reactotron from 'reactotron-react-native';
import Rating from '../../components/rating';
import styles from './styles';
import { genres } from '../../utils/genres';

export default function About({ navigation }) {
  const { movieID } = navigation.state.params;
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [parsedGenres, setParsedGenres] = useState([]);

  const getMovie = async id => {
    setLoading(true);
    await getByID(id)
      .then(response => {
        setLoading(false);
        setMovie(response);
        if (
          response.hasOwnProperty('genres') &&
          Array.isArray(response.genres)
        ) {
          setParsedGenres(response.genres.map(item => item.name));
        }
        Reactotron.log(parsedGenres);
      })
      .catch(error => {
        setLoading(false);
        setMovie({});
      });
  };

  useEffect(() => {
    if (!movieID) {
      return;
    } else {
      getMovie(movieID);
    }
  }, [movieID]);

  const timeConvert = n => {
    const num = n;
    const hours = num / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + 'h' + rminutes + 'm';
  };

  if (!movieID) {
    return (
      <View>
        <Text>Movie not provided</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.header}>
            <View style={styles.headerBG}>
              <Image
                style={styles.imageBG}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200/${movie.backdrop_path}`,
                }}
                blurRadius={2}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageCover}
                source={{
                  uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
                }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>
              {movie.title || movie.original_name || '---'}
            </Text>
            <Text>{movie.tagline}</Text>
            <Rating rating={movie.vote_average / 2} />

            <Text style={styles.sectionTitle}>Sinopse:</Text>
            <Text style={styles.overview}>{movie.overview || '---'}</Text>

            <Text style={styles.sectionTitle}>Gênero(s):</Text>
            <Text>{parsedGenres.join(', ')}</Text>

            <View style={styles.row}>
              <View style={styles.collumn}>
                <Text style={styles.sectionTitle}>Data de lançamento:</Text>
                <Text>{movie.release_date}</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.sectionTitle}>Duração:</Text>
                <Text>{timeConvert(movie.runtime)}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.collumn}>
                <Text style={styles.sectionTitle}>Rendimento:</Text>
                <Text>$ {Number(movie.revenue).toFixed(2)}</Text>
              </View>
              <View style={styles.collumn}>
                <Text style={styles.sectionTitle}>Orçamento:</Text>
                <Text>$ {Number(movie.budget).toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}
