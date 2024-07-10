import React from 'react';
import { Pressable, StyleSheet, Text, Touchable, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Redirect } from 'expo-router';

type RowProps = {
  text: string;
  data: string;
};

type CustomComponentProps = {
  onRedirect: () => void;
};

const Row = ({ text, data }: RowProps) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
      <Text style={styles.subtitle}>{text}:</Text>
      <Text>{data}</Text>
    </View>
  );
};

const ProfileHeader = ({ onRedirect }: CustomComponentProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onRedirect}>
    <View style={styles.container}>
      <View style={styles.contentLeft}>
        <Text style={styles.titleText}>Abraham Hernández</Text>
        <View style={styles.rowsContainer}>
          <View style={[styles.rowGroup, { marginRight: 18 }]}>
            <Row text={'Grado'} data='112233' />
            <Row text={'Grupo'} data='112233' />
          </View>
          <View style={styles.rowGroup}>
            <Row text={'Matricula'} data='112233' />
            <Row text={'Nivel'} data='112233' />
          </View>
        </View>
      </View>
      <View style={styles.contentRight}>
        <View style={styles.parentPicture}>
          <Image
            style={styles.picture}
            source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
            transition={1000}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '88%',
    backgroundColor: '#24203490',
    height: 120,
    borderRadius: 20,
    paddingVertical: 20,
    alignSelf: 'center',
  },
  contentLeft: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingRight: 50,
    paddingLeft: 25,
  },
  contentRight: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 6,
  },
  rowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowGroup: {
    paddingVertical: 4
  },
  subtitle: {
    color: '#70707f',
    marginRight: 5,
  },
  parentPicture: {
    borderRadius: 100,
    backgroundColor: '#343244',
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -32,
  },
  picture: {
    width: 68,
    height: 68,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default ProfileHeader;
