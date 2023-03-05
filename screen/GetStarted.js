import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function GetStarted() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>Create an Account</Text>

      <TextInput style={styles.email} 
      placeholder='please enter email' 
      onChangeText={(val)=>setEmail(val)}>
      </TextInput>

      <TextInput style={styles.email} 
      placeholder='type password' 
      onChangeText={(val)=>setPassword(val)}>
      </TextInput>

      <TextInput style={styles.email} 
      placeholder='re-type password' 
      onChangeText={(val)=>setPassword2(val)}>
      </TextInput>

      <Pressable 
      onPressOut={check(email, password, password2)}
      style={styles.createButton}>
        <Text style={styles.bold}>Create Account</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}



const check = (email, password, password2) => {
  if (password === password2) {
    // make the account
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "25%"
  },
  email: {
    borderColor: "#00bfff",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    width: 250
  },
  createButton: {
    backgroundColor: "#00bfff",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 200,
    marginBottom: 200
  }
});