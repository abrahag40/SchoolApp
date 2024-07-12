import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import { useRouter } from 'expo-router';
import Classes from '@/components/Classes';
import Homework from '@/components/Homework';
import Advertisement from '@/components/Advertisement';
import { Colors } from '@/constants/Colors';

const HomeScreen = () => {
  const router = useRouter();

  const handleRedirectProfile = () => router.push('/profile');

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ProfileHeader onRedirect={handleRedirectProfile}/>
      </View>
      
      <ScrollView
        style={styles.bottomSection}
        contentInset={{ top: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <View style={[styles.section, { paddingTop: 28 }]}>
            <Classes />
          </View>
          <View style={styles.section}>
            <Homework />
          </View>
          <View style={styles.section}>
            <Advertisement />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    height: '38%',
    backgroundColor: Colors.azulMarinoProfundo,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    marginTop: -54,
    padding: 20,
    paddingBottom: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
  },
  section: {
    paddingBottom: 38
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  bottomText: {
    color: Colors.azulMarinoProfundo,
    fontSize: 18,
  },
});

export default HomeScreen;
