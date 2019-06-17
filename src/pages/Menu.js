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

type Props = {};
export default class Menu extends Component<Props> {

  logout = () => {
     AsyncStorage.removeItem('user');
     Actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Menuuuu</Text>
        <TouchableOpacity onPress={this.logout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
      </View>
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
