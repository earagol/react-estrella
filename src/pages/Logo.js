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
  Image
} from 'react-native';


export default class Logo extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
          <Image 
            style={{width: 40, height: 70}}
            source={{uri: 'https://png.pngtree.com/element_origin_min_pic/16/11/25/f71fd72c068a485a289f5f8d45a34086.jpg'}}
          />
          <Text style={styles.logoText}>Welcome</Text>
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
  logoText : {
    marginVertical: 15,
    fontSize:18,
    color:'rgba(255, 255, 255, 0.7)',
  }
});