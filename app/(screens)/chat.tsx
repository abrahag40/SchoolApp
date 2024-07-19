import { useState } from 'react';
import { useWindowDimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import GeneralScreen from '@/components/GeneralScreen';
import ProfileHeader from '@/components/ProfileHeader';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

interface Message {
  id: string;
  text: string;
  isSentByUser: boolean; // Added property to distinguish message sender
}

const Chat = () => {
  const { height: windowHeight } = useWindowDimensions();
  const router = useRouter();
  const handleRedirectProfile = () => router.push('/profile');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim().length > 0) {
      // Simulate sending message and receiving a response
      setMessages([
        ...messages,
        { id: messages.length.toString(), text: input, isSentByUser: true },
        { id: (messages.length + 1).toString(), text: 'This is a response from the teacher or AI.', isSentByUser: false }
      ]);
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
                    <View
                      key={message.id}
                      style={[
                        styles.messageContainer,
                        message.isSentByUser ? styles.sentMessageContainer : styles.receivedMessageContainer
                      ]}
                    >
                      <Text
                        style={
                          message.isSentByUser ?
                            styles.messageTextRecibed :
                            styles.messageTextSend
                        }
                      >
                        {message.text}
                      </Text>
                    </View>
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
    justifyContent: 'flex-end',
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
    elevation: 4,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: '#E6E6E6',
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
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 4,
    marginBottom: 5,
  },
  sentMessageContainer: {
    backgroundColor: '#007BFF',
    alignSelf: 'flex-end',
  },
  receivedMessageContainer: {
    backgroundColor: Colors.blancoHumo,
    alignSelf: 'flex-start', 
  },
  messageTextSend: {
    color: 'black', 
    fontSize: 16,
  },
  messageTextRecibed: {
    color: '#fff', 
    fontSize: 16,
  },
});

export default Chat;
