import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';

const handleInputExample = () => {
  const [text, setText] = useState('')

  const handleSubmit = () =>(
    Alert.alert ('Submitted Text: ', text)
  )

  return(
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder= "Press Enter after typing..."
    onChangeText= {(value) => setText(value)}
    returnKeyType="done"
    onSubmitEditing={handleSubmit}
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
  },



});

export default handleInputExample;