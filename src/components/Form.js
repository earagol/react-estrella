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
  TouchableOpacity,
  ToastAndroid,
  Alert,
  ActivityIndicator
} from 'react-native';

// a component that calls the imperative ToastAndroid API
const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};


import { Actions } from 'react-native-router-flux';

export default class Form extends Component<{}> {

  state = {visible:false};
  sign = false;

  constructor(props) {
    super(props);
  }

  login = () => {
    
    console.log(this.state.usuario,this.state.password);
    
    //Hacer request a api login estrella
    if(this.state.usuario == 'admin' && this.state.password == 1234){
      this.sign = true;
    }

    // console.log(usuario);
    if(this.sign){
      Actions.menu();
    }else{
      this.setState({
        visible: true,
        usuario: '',//no funciona
        password: ''//no funciona
      },
      () => {
        setInterval(() => (
          this.setState({
            visible: false
          })
        ), 3000);
      }
      );
    }
    
  }


  

  render() {
    return (
        
        <View style={styles.container}>
          <Toast visible={this.state.visible} message="Usuario o contraseña incorrectos." />
          <TextInput
              style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Usuario'
              placeholderTextColor='#ffffff'
              onChangeText={(usuario) => this.setState({usuario})}
            />

          <TextInput 
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder='Password'
            placeholderTextColor='#ffffff'
            onChangeText={(password) => this.setState({password})}
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