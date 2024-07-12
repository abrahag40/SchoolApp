import React from 'react'
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ThemedText } from './ThemedText'
import HomeCard from './HomeCard'
import { Link } from 'expo-router'

export default function Advertisement() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ThemedText type='subtitle' style={{color: '#393939'}}>Upcoming Events</ThemedText>
        <Link href={''}>View all</Link>
      </View>
        <TouchableOpacity style={styles.card}>
          <HomeCard
            backgroundColor={'#E9F1F7'}
            isHomework={true}
            isAd={true}
          />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: -88,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingBottom: 14
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