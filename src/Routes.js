import React, { Component } from 'react';
import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Menu from './pages/Menu';
//uriPrefix={'thesocialnetwork.com'}
export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root">
			      <Scene key="login" component={Login} title="Login"/>
			      <Scene key="menu" component={Menu} title="Menu"/>
			    </Stack>
			</Router>
			)
	}

}