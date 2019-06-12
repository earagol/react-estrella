/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Form extends Component<{}> {

  login() {
    Actions.menu();
  }

  render() {
    return (
        <View style={styles.container}>
          <TextInput 
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Usuario'
              placeholderTextColor='#ffffff'
            />

          <TextInput 
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Password'
            placeholderTextColor='#ffffff'
          />

          <TouchableOpacity onPress={this.login} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox : {
    width: 300,
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize:16,
    color:'#ffffff',
    marginVertical:10
  },
  button : {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical:10,
    paddingVertical: 16,
  },
  buttonText : {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});