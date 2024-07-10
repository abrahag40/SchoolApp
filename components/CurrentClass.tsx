import { StyleSheet, View, Text } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'

type CurrentClassProps = {
  backgroundColor: string;
};

const CurrentClass = ({ backgroundColor }: CurrentClassProps) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.contentLeft}>
        <View style={styles.teacherProfile}>
          <Image
            style={styles.teacherImage}
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
            transition={1000}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.subjectText, {paddingBottom: 3}]}>Math</Text>
            <Text style={styles.scheduleText}>8:00 AM - 9:00 AM</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentRight}>
        <Image
          style={styles.picture}
          source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
          transition={1000}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 140,
    borderRadius: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  contentLeft: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 50,
    flex: 1,
    alignItems: 'center'
  },
  teacherProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 4
  },
  textContainer: {
    marginLeft: 10,
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleText: {
    fontSize: 14,
    color: '#70707f',
  },
  contentRight: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  picture: {
    width: 100,
    height: 100,
  },
})

export default CurrentClass;
