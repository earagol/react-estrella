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
  // Text, 
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

import { Actions } from 'react-native-router-flux';

type Props = {};
export default class Dashboard extends Component<Props> {

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header button>
              <Text>Ventas</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Número Ventas: 25</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Monto Ventas: $256.999</Text>
              </Body>
            </CardItem>
          </Card>


          <Card>
            <CardItem header button>
              <Text>CXC</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Número clientes con CXC: 7</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Monto clientes con CXC: $67.800</Text>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem header button>
              <Text>Transferencias</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Número de transferencias por confirmar: 2</Text>
              </Body>
            </CardItem>

            <CardItem>
              <Body>
                <Text>Monto transferencias: $16.500</Text>
              </Body>
            </CardItem>
          </Card>

        </Content>
      </Container>
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
