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
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Menu from '../components/Menu';

type Props = {};
export default class Dashboard extends Component<Props> {

  logout = () => {
     AsyncStorage.removeItem('user');
     Actions.login();
  }

  render() {
    return (
      <Menu/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
