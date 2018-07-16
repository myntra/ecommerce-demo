import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
    TouchableWithoutFeedback,
} from 'react-native';


const myntraLogo = 'https://assets.myntassets.com/assets/images/retaillabs/2018/7/16/3ec24395-fec9-4cf9-9440-9118de40555a1531742032871-myntra-logo.png';
export default class LandingPage extends Component {

    constructor(props) {
		super(props);
		this.state = { text: '' };
		this.handleSearchPress = this.handleSearchPress.bind(this);
	}

	handleSearchPress() {
        this.props.navigation.navigate('Search', {
            query: this.state.text,
        });
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={{ uri: myntraLogo }} style={ styles.logo } />
				<Text style={[styles.infoText, styles.medium]}>SEARCH PRODUCTS ON <Text style={styles.regular}>MYNTRA</Text></Text>
				<View style={ styles.inputContainer }>
					<TextInput
                        underlineColorAndroid={ 'transparent' }
						style={ styles.input }
						onChangeText={ text => this.setState({text}) }
						value={ this.state.text }
					/>
				</View>
				<TouchableWithoutFeedback onPress={ this.handleSearchPress }>
					<View style={ styles.nextBtn }>
						<Text style={styles.nextBtnText}>GO</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 25,
		marginHorizontal: 40,
		backgroundColor: '#f5f5f6',
		borderColor: '#d5d6d9',
		borderWidth: 0.5,
		height: 45,
		borderRadius: 4,
		alignSelf: 'stretch',
		paddingHorizontal: 15,
	},
	input: {
		flex: 1,
		color: '#161925',
		fontSize: 20,
	},
	nextBtn: {
		marginTop: 50,
		height: 40,
		width: 100,
		backgroundColor: '#FF3F6C',
		justifyContent: 'center',
		borderRadius: 50,
	},
	nextBtnText: {
		fontWeight: 'bold',
		fontSize: 13,
		color: '#ffffff',
		alignSelf: 'center',
	},
	logo: {
        marginTop: 80,
		width: 100,
		height: 100
	},
	infoText: {
		fontSize: 11,
		letterSpacing : 1.5,
		marginTop: 80,
	},
	medium: {
		color: '#161925',
	},
	regular: {
		color: '#94989f',
	},
});