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
  View
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';



type Props = {};
export default class Login extends Component<Props> {
  render() {
    return ( 
      <View style={styles.container}>
        <View style={{flex: 1}} >
          <Logo/>
        </View>
        <View style={{flex: 2}} >
          <Form/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    // marginVertical:5
  }
});
