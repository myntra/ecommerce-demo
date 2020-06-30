import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './src/apps/landingpage';
import Search from './src/apps/search';

const RootNavigator = createStackNavigator(
	{
		Home: {
			screen: LandingPage,
			navigationOptions: ({ navigation }) => ({
				headerShown: false,
			}),
		},
		Search: {
			screen: Search,
			navigationOptions: ({ navigation }) => ({
				title: 'Search',
			}),
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default createAppContainer(RootNavigator);