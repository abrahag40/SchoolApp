import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemedText } from './ThemedText'

export default function Advertisement() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Upcoming Events</ThemedText>
        <ThemedText type='default' style={{color: '#393939'}}>View all</ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0
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