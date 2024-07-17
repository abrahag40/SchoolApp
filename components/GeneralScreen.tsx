import { View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors'; 

const GeneralScreen = ({ children }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* Espacio reservado para el contenido del topSection */}
        {children.topSection}
      </View>
      
      <ScrollView
        style={styles.bottomSection}
        contentInset={{ top: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Espacio reservado para el contenido del bottomSection */}
        {children.bottomSection}
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
});

export default GeneralScreen;
