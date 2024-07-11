import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentClass from './CurrentClass'
import { ThemedText } from './ThemedText'
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const classes = [
  { id: 4, backgroundColor: '#E6E6DF', className: 'Ciencias Nat.' },
  { id: 1, backgroundColor: '#F1EEE9', className: 'Arte' },
  { id: 3, backgroundColor: '#E6DEF4', className: 'Matemáticas' },
  { id: 5, backgroundColor: '#E9F1F7', className: 'Educación Física' },
  { id: 6, backgroundColor: '#F4F1E9', className: 'Música' },
  { id: 7, backgroundColor: '#DEF4E6', className: 'Ciencias Sociales' },
];

export default function Classes() {
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Current Classs</ThemedText>
        <ThemedText type='default' style={{color: '#393939'}}>2 Classes left</ThemedText>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {classes.map(({id, backgroundColor, className}) => (
          <CurrentClass
            key={id}
            backgroundColor={backgroundColor}
            className={className}
          />
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
})