import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable } from 'react-native';
import { StyleSheet, Text, TextInput, View, } from 'react-native';





export default function GetStarted({navigation}) {
    
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [textcolor, setcolor] = useState('white');
  
  
  return (
 
    <View style={styles.container}>
      <Text style={styles.bold}>Log In</Text>
     

      <TextInput style={styles.email} 
      placeholder='Email' 
      onChangeText={(val)=>setEmail(val)}>
      </TextInput>

      <TextInput style={styles.email} 
      placeholder='Password' 
      onChangeText={(val)=>setPassword(val)}>
      </TextInput>

      <Pressable 
      onPressOut={() => {
        if (!login(email, password)) {
          console.log("false");
          setcolor('red');
          navigation.navigate('BottemTab');
          
        } else {
          setcolor('white');
          navigation.navigate('BottemTab');
          
        }
      }}
      style={styles.createButton}>
        <Text style={styles.bold}>Log In</Text>
      </Pressable>
      
      <Text style={{color: textcolor}}>Invalid Login</Text>
      <StatusBar style="auto" />
    </View>
   
  );
}

export function login (email, password) {
    state = {isTrue: true};
    fetch("", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({login: email, pass: password})
      }).then(res => {
        console.log(res.status);
        console.log(res.headers);
        return res.json();
      }).then(
        (result) => {
          console.log(result);
          return state.isTrue;
        },
        (error) => {
          console.log(error);
          console.log("something went wrong");
          return !state.isTrue;
        }
      );
}

const styles = StyleSheet.create({
  invisible: {
    color: "white"
  },
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

