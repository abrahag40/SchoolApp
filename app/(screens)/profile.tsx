import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, SafeAreaView, Platform, Button } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import GeneralScreen from '@/components/GeneralScreen';
import { useRouter } from 'expo-router';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Profile() {
  const router = useRouter();
  const handleRedirectProfile = () => router.push('/profile');

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  return (
    <GeneralScreen>
      {{
        topSection: <ProfileHeader onRedirect={handleRedirectProfile} />,
        bottomSection: (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              {/* Encabezados */}
              <View style={styles.header}>
                <Text style={styles.title}>Student Details</Text>
                <Text style={styles.viewProfileButtonText} onPress={handleRedirectProfile}>
                  View teacher's profile
                </Text>
              </View>

              <View style={styles.formGroup}>
                <View style={styles.inputContainer}>

                  {/* Inician datos generales */}

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput style={styles.input} placeholder="Enter name" />
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>Grado</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Matricula</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>Date of Birth</Text>
                      <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                      />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Roll Number</Text>
                      <TextInput style={styles.input} placeholder="Enter roll number" />
                    </View>
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>Lugar de nacimiento</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Sexo</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                  </View>

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>CURP</Text>
                    <TextInput style={styles.input} placeholder="CURP" />
                  </View>

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Father Name</Text>
                    <TextInput style={styles.input} placeholder="Enter name" />
                  </View>

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Mother Name</Text>
                    <TextInput style={styles.input} placeholder="Enter name" />
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>Núm. de casa</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Núm. de emergencia</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                  </View>

                  {/* Inicia datos de dirección */}

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Calle</Text>
                    <TextInput style={styles.input} placeholder="" />
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>Estado</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Municipio</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                  </View>

                  <View style={styles.inputRow}>
                    <View style={[styles.inputCol, { paddingRight: 16 }]}>
                      <Text style={styles.label}>CP</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                    <View style={styles.inputCol}>
                      <Text style={[styles.label, ]}>Colonia</Text>
                      <TextInput style={styles.input} placeholder="" />
                    </View>
                  </View>

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Indicaciones médicas</Text>
                    <TextInput
                      style={[styles.input, { minHeight: 100, textAlignVertical: 'top' }]}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Escribe aquí..."
                    />
                  </View>

                  <View style={{ paddingBottom: 14 }}>
                    <Text style={styles.label}>Preferencias alimenticias</Text>
                    <TextInput
                      style={[styles.input, { minHeight: 100, textAlignVertical: 'top' }]}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="Escribe aquí..."
                    />
                  </View>

                </View>
              </View>
            </View>
          </SafeAreaView>
        ),
      }}
    </GeneralScreen>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewProfileButtonText: {
    fontSize: 14,
    color: '#333333',
    textDecorationLine: 'underline',
  },
  formGroup: {
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputRow: {
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputCol: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fcfcfc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 10,
  },
});
