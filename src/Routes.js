import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
//uriPrefix={'thesocialnetwork.com'}

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Scene key="root" hideNavBar = {true}>
			      <Scene key="login" component={Login} title="Login" initial={true} />
			      <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
			    </Scene>
			</Router>
			)
	}

}