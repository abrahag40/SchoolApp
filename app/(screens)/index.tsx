import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Classes from '@/components/Classes';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.headerText}>Top Section</Text>
      </View>
      <View style={styles.bottomSection}>
        <Classes />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hamburger: {
    position: 'absolute',
    top: 60, // Ajusta esta posición según tus necesidades
    left: 20,
    zIndex: 10,
  },
  topSection: {
    height: '30%',
    backgroundColor: '#1A162B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 60, // Cambiado a 60
    borderTopRightRadius: 60, // Cambiado a 60
    marginTop: -40,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  bottomText: {
    color: '#1A162B',
    fontSize: 18,
  },
});

export default HomeScreen;
