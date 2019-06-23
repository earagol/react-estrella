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
  ActivityIndicator,
  AsyncStorage
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

  

  constructor(props) {
    super(props);

    this.state = {
      visible:false,
      isLoading:false,
      username:'',
      password:''
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
      var value = await AsyncStorage.getItem('user');
      console.log('aqui',value);
      if(value !== null) {
        Actions.dashboard();
      }
  }

  login = () => {

    this.setState({isLoading: true},
      () => {
        setInterval(() => (
          this.setState({
            isLoading: false
          })
        ), 3000);
      }
      ); 
    
    // //console.log(this.state.usuario,this.state.password);
    
    //Hacer request a api login estrella
    if(this.state.usuario == 'admin' && this.state.password == 1234){
      AsyncStorage.setItem('user',this.state.usuario);
      Actions.dashboard();
    }else{
      // this.setState({isLoading: false}); 
      this.usuario.clear();
      this.password.clear();
      this.setState({
        visible: true
      },
      () => {
        setInterval(() => (
          this.setState({
            visible: false
          })
        ), 3000);
      });
    }


    //////////////////////////Ejemplo de llamado a api login/////

    fetch('http://104.248.208.143/estrella/api/usuarios/token',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.usuario,
        password: this.state.password
      })
    })
    .then( (response) => response.json() )
    .then( (res) => {

      // console.log(res);
      if(res.success){
        AsyncStorage.setItem('user',this.state.usuario);
        Actions.dashboard();
      }else{
        // this.setState({isLoading: false}); 
        this.usuario.clear();
        this.password.clear();
        this.setState({
          visible: true
        },
        () => {
          setInterval(() => (
            this.setState({
              visible: false
            })
          ), 3000);
        });
      }



      

    });


    //////////////////////////
    
  }


  

  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <View style={styles.container}>
          <Toast visible={this.state.visible} message="Usuario o contraseña incorrectos." />
          <TextInput
              style={styles.inputBox}
              ref={input => { this.usuario = input }}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder='Usuario'
              placeholderTextColor='#ffffff'
              onChangeText={(usuario) => this.setState({usuario})}
            />

          <TextInput 
            style={styles.inputBox}
            ref={input => { this.password = input }}
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