import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeCard from './HomeCard'
import { ThemedText } from './ThemedText'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Link } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');

const classes = [
  { id: 4, backgroundColor: '#E6E6DF', className: 'Ciencias Nat.', textData: '12:00 - 1:00 pm' },
  { id: 1, backgroundColor: '#F1EEE9', className: 'Arte', textData: '12:00 - 1:00 pm' },
  { id: 3, backgroundColor: '#E6DEF4', className: 'Matemáticas', textData: '12:00 - 1:00 pm' },
  { id: 5, backgroundColor: '#E9F1F7', className: 'Educación Física', textData: '12:00 - 1:00 pm' },
  { id: 6, backgroundColor: '#F4F1E9', className: 'Música', textData: '12:00 - 1:00 pm' },
  { id: 7, backgroundColor: '#DEF4E6', className: 'Ciencias Sociales', textData: '12:00 - 1:00 pm' },
];

export default function Classes() {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Current Classs</ThemedText>
        <Link href={''}>View all</Link>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {classes.map(({id, backgroundColor, className, textData}) => (
          <View style={styles.card} key={id}>
            <HomeCard
              backgroundColor={backgroundColor}
              className={className}
              textData={textData}
              isClass={true}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingBottom: 14
  },
  carouselContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  card: {
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
})