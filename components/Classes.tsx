import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentClass from './CurrentClass'
import { ThemedText } from './ThemedText'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const classes = [
  { id: 1, backgroundColor: '#f1c40f' },
  { id: 2, backgroundColor: '#e74c3c' },
  { id: 3, backgroundColor: '#2ecc71' },
  { id: 4, backgroundColor: '#3498db' },
];

export default function Classes() {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Current Classs</ThemedText>
        <ThemedText type='default' style={{color: '#393939'}}>2 Classes left</ThemedText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {classes.map((classItem) => (
          <CurrentClass key={classItem.id} backgroundColor={classItem.backgroundColor} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40
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
})