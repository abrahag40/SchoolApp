import { View, StyleSheet } from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import { useRouter } from 'expo-router';
import Classes from '@/components/Classes';
import Homework from '@/components/Homework';
import Advertisement from '@/components/Advertisement';
import GeneralScreen from '@/components/GeneralScreen';

const HomeScreen = () => {
  const router = useRouter();
  const handleRedirectProfile = () => router.push('/profile');

  return (
    <GeneralScreen>
      {{
        topSection: <ProfileHeader onRedirect={handleRedirectProfile} />,
        bottomSection: (
          <>
            <View style={[styles.section, { paddingTop: 28 }]}>
              <Classes />
            </View>
            <View style={styles.section}>
              <Homework />
            </View>
            <View style={styles.section}>
              <Advertisement />
            </View>
          </>
        ),
      }}
    </GeneralScreen>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingBottom: 38,
  },
});

export default HomeScreen;
