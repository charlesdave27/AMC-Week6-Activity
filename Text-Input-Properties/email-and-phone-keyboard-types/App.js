import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';

const handleInputExample = () => {
 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('')

  return(
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder= "Enter Email"
        keyboardType= "email-address"
        onChangeText= {(text) => setEmail(text)}
        />

      <TextInput style={styles.input}
        placeholder= "Enter Phone Number"
        keyboardType= "phone-pad"
        onChangeText= {(text) => setPhone(text)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10
  },



});

export default handleInputExample;