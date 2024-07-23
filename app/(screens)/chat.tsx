import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { getOpenAIResponse } from '@/services/IA';

enum USER_TYPES {
  USER = 'User',
  BOT = 'Bot'
}

interface Message {
  text: string;
  sender: USER_TYPES; // Added property to distinguish message sender
}

const Chat = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const userMessage = { text: input, sender: USER_TYPES.USER };
    setMessages([...messages, userMessage]);

    const aiResponse = await getOpenAIResponse(input);

    console.log(aiResponse);

    if (aiResponse.status) {
      
    }
    
    const botMessage = { text: 'aiResponse', sender: USER_TYPES.BOT };
    setMessages([...messages, userMessage, botMessage]);

    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg, index) => (
            <View key={index} style={msg.sender === USER_TYPES.USER ? styles.userMessage : styles.botMessage}>
              <Text>
                {msg.text}
              </Text>
            </View>
          ))}
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
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 70,
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    bottom: 0,
    elevation: 4,
    flexDirection: 'row',
    left: 0,
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 4,
    borderWidth: 0,
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0084FF', //blue
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.blancoHumo,
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
});

export default Chat;
