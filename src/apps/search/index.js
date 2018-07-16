import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

export default class Search extends Component {

    constructor(props) {
		super(props);
	}

	render() {
        const { navigation } = this.props;
        const query = navigation.getParam('query', '');
		return (
			<View style={styles.container}>
                <Text style={styles.text}> You searched for { query } </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});