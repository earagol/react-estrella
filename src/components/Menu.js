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
  AsyncStorage
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem, Thumbnail } from 'native-base';


export default class Menu extends Component<{}> {
  // in render function
  logout = () => {
     AsyncStorage.removeItem('user');
     Actions.login();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor:'#2c3e50',justifyContent:'center',alignItems:'center'}}>
          <Thumbnail
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW6lc54VRQxJKTl8FE4EenqslaAqGofSJ1ds7a-AiUZQIRQE2Pg'}}
            large
          />
          <Text style={{color:'#fff',fontSize: 15, marginTop: 10}}>Erisk Aragol</Text>
        </View>

        <View style={{flex:2}}>
          <Content>
            <List>
              <ListItem onPress={ () => { Actions.dashboard() } }>
                <Text>Dashboard</Text>
              </ListItem>

              <ListItem onPress={ () => { Actions.dashboard2() } }>
                <Text>Menu 2</Text>
              </ListItem>

              <ListItem onPress={this.logout} >
                <Text>Cerrar Sesión</Text>
              </ListItem>
            </List>
          </Content>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});