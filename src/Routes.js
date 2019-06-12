/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';

export default class Routes extends Component<{}> {
	r3ender() {
		return(
				<Router uriPrefix={'thesocialnetwork.com'}>
				  <Scene key="root">
				     <Scene key={'login'} component={Login} title='Login' />
				  </Scene>
				</Router>
			)
	}

}