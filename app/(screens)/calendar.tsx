import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const Calendar = () => {
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['Classes', 'Events'];

  return (
    <View>
      <View style={styles.container}>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              index === 0 ? styles.leftBtn : styles.rigthBtn,
              selectedIndex === index && styles.selectedButton,
            ]}
            onPress={() => setSelectedIndex(index)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedIndex === index && styles.selectedButtonText
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {
        selectedIndex === 0 ?
        <View style={styles.content}>
          <View style={[styles.flexRow, { paddingBottom: 12 }]}>
            <Text style={{ fontSize: 24, paddingRight: 6 }}>12:00 - 12:30 pm</Text>
            <Text style={{ top: 9, fontWeight: '300' }}>Today</Text>
          </View>
          <View style={ styles.classContent }>
            <View style={[styles.flexRow, { paddingBottom: 14, paddingLeft: 10 } ]}>
              <View style={{ paddingRight: 14 }}>
                <Image
                  style={ styles.classImage }
                  source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
                  transition={1000}
                />
              </View>
              <View>
                <Text style={{ fontWeight: '500', fontSize: 18, paddingBottom: 1, paddingTop: 2 }}>Maths</Text>
                <Text>By - Miss Alejandra</Text>
              </View>
            </View>
            <View style={{ paddingBottom: 6 }}>
              <MaskedView
                style={{ height: 90, marginBottom: 12, }}
                maskElement={
                  <LinearGradient
                    style={{ flex: 1 }}
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                    locations={[0.1, 1]}
                  />
                }
              >
                <Text style={styles.textData}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odio quos ducimus repellat ipsam ad necessitatibus eaque iure, fugit porro facere odit. Pariatur error impedit voluptates nemo iste dignissimos unde! Adipisci ad sit est laboriosam expedita facilis dolore, optio eius quaerat. Ut, ratione molestiae quia sequi consequuntur at nihil quibusdam necessitatibus excepturi incidunt numquam facilis, amet corrupti possimus dicta quaerat.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum odio quos ducimus repellat ipsam ad necessitatibus eaque iure, fugit porro facere odit. Pariatur error impedit voluptates nemo iste dignissimos unde! Adipisci ad sit est laboriosam expedita facilis dolore, optio eius quaerat. Ut, ratione molestiae quia sequi consequuntur at nihil quibusdam necessitatibus excepturi incidunt numquam facilis, amet corrupti possimus dicta quaerat.
                </Text>
              </MaskedView>
            </View>
          </View>
        </View>
        :
        <View>
          <Text>
            Event
          </Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 30,
    paddingBottom: 30,
    paddingTop: 70,
  },
  content: {
    paddingLeft: 18,
    marginHorizontal: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#E6E6E6',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  leftBtn: {
    borderTopLeftRadius: 18,
    borderBottomStartRadius: 18,
  },
  rigthBtn: {
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  flexRow: {
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  selectedButtonText: {
    color: '#fff',
  },
  classImage: {
    borderRadius: 30,
    height: 46,
    width: 46,
  },
  classContent: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  textData: {
    fontWeight: '300',
    textAlign: 'left',
  }
});

export default Calendar;
