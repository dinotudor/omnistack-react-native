import React from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from './../assets/logo.png';

export default function Login() {
  return(
    <KeyboardAvoidingView
      behavior="padding"
      enebled={Platform.OS === 'ios'}
      style={styles.container}>

      <Image source={logo}/>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter your Github user"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor :'#DF4723',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
