import { useState } from 'react';
import { useWindowDimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import GeneralScreen from '@/components/GeneralScreen';
import ProfileHeader from '@/components/ProfileHeader';
import { useRouter } from 'expo-router';

interface Message {
  id: string;
  text: string;
}

const Chat = () => {
  const { height: windowHeight } = useWindowDimensions();
  const router = useRouter();
  const handleRedirectProfile = () => router.push('/profile');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim().length > 0) {
      setMessages([...messages, { id: messages.length.toString(), text: input }]);
      setInput('');
    }
  };

  return (
    <GeneralScreen scrollViewEnabled={false}>
      {{
        topSection: <ProfileHeader onRedirect={handleRedirectProfile} />,
        bottomSection: (
          <KeyboardAvoidingView
            style={styles.safeArea}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.container}>
              <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.messagesContainer}>
                  {messages.map(message => (
                    <Text key={message.id} style={styles.message}>{message.text}</Text>
                  ))}
                </View>
              </ScrollView>
              <View style={styles.inputArea}>
                <TextInput
                  style={styles.input}
                  value={input}
                  onChangeText={setInput}
                  placeholder="Type a message"
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                  <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        ),
      }}
    </GeneralScreen>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Ensure the inputArea is always at the bottom
  },
  scrollView: {
    flexGrow: 1,
  },
  messagesContainer: {
    padding: 10,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 4, // Optional: Adds shadow for better visibility
  },
  input: {
    flex: 1,
    borderWidth: 0, // Removed border
    backgroundColor: '#E6E6E6', // Set background color
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  message: {
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default Chat;
