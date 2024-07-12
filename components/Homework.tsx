import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'
import HomeworkCards from './HomeworkCards'
import { Link } from 'expo-router';

const classes = [
  { id: 4, backgroundColor: '#E6E6DF', className: 'Ciencias Nat.', textData: '12:00 - 1:00 pm' },
  { id: 1, backgroundColor: '#F1EEE9', className: 'Arte', textData: '12:00 - 1:00 pm' },
  { id: 3, backgroundColor: '#E6DEF4', className: 'Matemáticas', textData: '12:00 - 1:00 pm' },
  { id: 5, backgroundColor: '#E9F1F7', className: 'Educación Física', textData: '12:00 - 1:00 pm' },
  { id: 6, backgroundColor: '#F4F1E9', className: 'Música', textData: '12:00 - 1:00 pm' },
  { id: 7, backgroundColor: '#DEF4E6', className: 'Ciencias Sociales', textData: '12:00 - 1:00 pm' },
];

export default function Homework() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Home works</ThemedText>
        <Link href={''}>View all</Link>
      </View>
      <HomeworkCards />
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