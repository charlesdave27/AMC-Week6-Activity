import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const InputWithIcon = () => {
  const [text, setText] = useState('')

  return(
    <View style={styles.inputContainer}>

      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput style={styles.input}
        placeholder= "Search"
        onChangeText= {(value) => setText(value)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  input: {
    height: 40,
    width: '80%',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },


});

export default InputWithIcon;