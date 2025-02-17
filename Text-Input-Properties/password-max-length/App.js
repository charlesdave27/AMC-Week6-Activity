import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const handleInputExample = () => {
  const [username, setUsername] = useState('')

  return(
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder= "Enter Username"
    maxLength ={10}
    onChangeText= {(value) => setUsername(value)}
    />
  <Text style={styles.displayText}> Remaining: {10 - username.length} </Text>
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
  },
  displayText: {
    marginTop: 10,
    fontSize: 10

  }




});

export default handleInputExample;