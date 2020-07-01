import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './src/apps/landingpage';
import Search from './src/apps/search';
import PDP from './src/apps/pdp';

const RootNavigator = createStackNavigator(
	{
		Home: {
			screen: LandingPage,
			navigationOptions: () => ({
				headerShown: false,
			}),
		},
		Search: {
			screen: Search,
			navigationOptions: () => ({
				title: 'Search',
			}),
		},
		PDP: {
			screen: PDP,
			navigationOptions: () => ({
				title: 'PDP',
			}),
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default createAppContainer(RootNavigator);