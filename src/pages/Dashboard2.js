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

type Props = {};
export default class Dashboard2 extends Component<Props> {

  render() {
    return (
      <Text>Dashboard 12</Text>
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
