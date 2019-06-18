import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Router, Stack, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';
import Menu from './components/Menu';
//uriPrefix={'thesocialnetwork.com'}

const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

// const MenuIcon = ({focused, iconName}) => {
// 	var color = focused ? '#labc9c' : '#7f8c8d';
// 	return {
// 		<Icon name={iconName} color={color} size={30} style={{height:30,width:30}} />
// 	}
// }


const MenuIcon = () => {
	return (
		<Icon name='menu' size={30} />
	)
}
export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Scene key="root" hideNavBar = {true}>
			      <Scene key="login" component={Login} title="Login" />

			      <Scene initial
			      key='drawer'
			      drawer
			      contentComponent={Menu}
			      drawerIcon={MenuIcon}
			      drawerWidth={300}
			      hideNavBar
			      >
			      <Scene key="dashboard" component={Dashboard} title="Dashboard 1"/>
			      <Scene key="dashboard2" component={Dashboard2} title="Dashboard 2"/>
			      </Scene>


			      
			    </Scene>
			</Router>
			)
	}

}