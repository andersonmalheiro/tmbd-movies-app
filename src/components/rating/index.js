import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const fullStar = () => <Icon name="star" style={styles.star} />;
const halfStar = () => <Icon name="star-half" style={styles.star} />;
const emptyStar = () => <Icon name="star-border" style={styles.star} />;

export default function Rating({ rating }) {
  const stars = [];
  function parseRate() {
    const integerPart = Math.floor(rating);
    const decimalPart = rating % 1;

    for (let index = 0; index < integerPart; index++) {
      stars.push(fullStar);
    }
    if (decimalPart >= 0.5 && decimalPart <= 0.75) {
      stars.push(halfStar);
    } else if (decimalPart > 0.75) {
      stars.push(fullStar);
    } else {
      stars.push(emptyStar);
    }
    const emptyNum = 5 - stars.length;
    for (let index = 0; index < emptyNum; index++) {
      stars.push(emptyStar);
    }
  }

  parseRate();

  return (
    <View style={styles.starContainer}>
      {stars.map((Star, index) => (
        <Star key={index} />
      ))}
    </View>
  );
}
