import { StatusBar } from 'expo-status-bar';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Create an Account</Text>
      <TextInput style={styles.email} placeholder='please enter email'></TextInput>
      <TextInput style={styles.email} placeholder='type password'></TextInput>
      <TextInput style={styles.email} placeholder='re-type password'></TextInput>
      <Pressable style={styles.createButton}>
        <Text>Create Account</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    borderColor: "#00bfff",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 150,
    
  },
  createButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    borderRadius: 30,
    width: 150,
    marginBottom: 200
    
  }
});