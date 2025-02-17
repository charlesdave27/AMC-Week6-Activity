import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const PasswordInputExample = () => {
  const [password, setPassword] = useState('')

  return(
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder= "Enter Password"
    secureTextEntry={true}
    onChangeText= {(value) => setText(value)}
    />
  <Text style={styles.displayText}> Password Length: {password.length} </Text>
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
    color: 'red'
  },
  displayText: {
    marginTop: 10,
    fontSize: 10

  }




});

export default PasswordInputExample;