import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LandingPage from './src/apps/landingpage';
import Search from './src/apps/search';
import PDP from './src/apps/pdp';

export default class App extends React.Component {
	
	render() {
		return (
			<View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
				<RootNavigator />
			</View>
		);
	}
}

const RootNavigator = createStackNavigator(
	{
		Home: {
			screen: LandingPage,
			navigationOptions: () => ({
				header: null,
			}),
		},
		Search: {
			screen: Search,
			navigationOptions: () => ({
				title: 'Search',
				headerStyle:{
					marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
				},
			}),
		},
		PDP: {
			screen: PDP,
			navigationOptions: () => ({
				title: 'PDP',
				headerStyle:{
					marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
				},
			}),
		},
	},
	{
		initialRouteName: 'Home',
	}
);