import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'

type HomeCardProps = {
  backgroundColor?: string;
  className?: string;
  isHomework?: boolean;
  textData?: string;
  isFirstCard?: boolean;
  isAd?: boolean;
  isClass?: boolean;
};

const HomeCard = ({
    backgroundColor,
    isFirstCard = false,
    className,
    textData,
    isHomework = false,
    isAd = false,
    isClass = false,
  }: HomeCardProps) => {
  return (
    <View style={[ styles.container, { backgroundColor }]}>
      <View style={[styles.contentLeft, isFirstCard ? { top: -16 } : {}]}>
        {
          !isAd ?
          <View style={ styles.teacherProfile }>
            <Image
              style={ styles.teacherImage }
              source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
              transition={1000}
            />
            <View style={ styles.textContainer }>
              <Text style={[ styles.subjectText, { paddingBottom: 3 }]}>{ className }</Text>
              <Text style={ styles.scheduleText }>{ textData }</Text>
            </View>
          </View> : 
          <View>
          </View>
        }
      </View>
      {
        isClass ? 
        <View style={ styles.contentRight }>
          <Image
            style={ styles.picture }
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
            transition={ 1000 }
          />
        </View> : 
        <View style={ styles.contentRight }>

        </View>
      }
    </View>
  )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 140,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  contentLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 46,
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
    marginLeft: -8,
    width: 100,
    height: 100,
  },
})

export default HomeCard;
