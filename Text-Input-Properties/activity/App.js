import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons'


const handleInputExample = () => {
  const [text, setText] = useState('')

  const handleSubmit = () =>(
    Alert.alert ('Submitted Text: ', text)
  )

  return(
    <View style={styles.container}>
      <Ionicons name="person-outline" size={20} color="green" style={styles.icon} />
      <TextInput style={styles.input}
      placeholder= "Enter FNAME:"
      onChangeText= {(value) => setText(value)}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      />

      <Ionicons name="person-outline" size={20} color="yellowgreen" style={styles.icon} />
      <TextInput style={styles.input}
      placeholder= "Enter LNAME:"
      onChangeText= {(value) => setText(value)}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      />

      <Ionicons name="calendar-number-outline" size={20} color="brown" style={styles.icon} />
      <TextInput style={styles.input}
      placeholder= "Enter AGE:"
      onChangeText= {(value) => setText(value)}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      
      />

      <Ionicons name="mail-outline" size={20} color="blue" style={styles.icon} />
      <TextInput style={styles.input}
      placeholder= "Enter EMAIL ADDRESS:"
      onChangeText= {(value) => setText(value)}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      />

      <Ionicons name="warning-outline" size={20} color="orangered" style={styles.icon} />
      <TextInput style={styles.input}
      placeholder= "Enter PASSWORD:"
      onChangeText= {(value) => setText(value)}
      returnKeyType="done"
      onSubmitEditing={handleSubmit}
      secureTextEntry={true}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'column',
    alignItems: 'column',

  },
  input: {
    borderWidth: 1,
    height: 40,
    width: '80%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'gray',
    marginBottom: 15,
  },

  icon:{
    flexDirection: 'column'
  }



});

export default handleInputExample;