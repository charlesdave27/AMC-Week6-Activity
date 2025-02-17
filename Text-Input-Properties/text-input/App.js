import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const handleInputExample = () => {
  const [text, setText] = useState('')

  return(
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder= "Type Here..."
    onChangeText= {(value) => setText(value)}
    />
  <Text style={styles.displayText}> You typed: {text} </Text>
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