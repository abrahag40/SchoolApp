import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeCard from './HomeCard';

const HomeworkCards = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.card, styles.cardBehind]}>
        <HomeCard
          backgroundColor={'#DEF4E6'}
          className={'English'}
          textData={'2 days left'}
          isFirstCard={true}
          isHomework={true}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.middleCard]}>
        <HomeCard
          backgroundColor={'#DEF4E6'}
          className={'English'}
          textData={'2 days left'}
          isFirstCard={true}
          isHomework={true}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card, styles.cardFront]}>
        <HomeCard
          backgroundColor={'#E6DEF4'}
          className={'English'}
          textData={'2 days left'}
          isHomework={true}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 338,
  },
  card: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  cardBehind: {
    zIndex: 0,
    transform: [{ translateY: -48 }],
  },
  cardFront: {
    marginTop: 30,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  middleCard: {
    zIndex: -2,
    transform: [{ translateY: -96 }],
  }
});

export default HomeworkCards;
