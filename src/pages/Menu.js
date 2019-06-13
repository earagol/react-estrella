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


type Props = {};
export default class Menu extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Menuuuu</Text>
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
