import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
    View,
    FlatList,
} from 'react-native';
import Product from '../../components/Product';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
        this.handlePress = this.handlePress.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
    
    componentDidMount () {
		this.fetchProducts();
    }

    handlePress (productData) {
        this.props.navigation.navigate('PDP', {
            data: productData,
        });
    }

    keyExtractor = (item) => item.styleid
    
    async fetchProducts() {
        this.setState({
            loading: true,
        });
        // This is how you actually use query in a request, but Myntra APIs are behind a token
        // Hence added a dummy JSON to JSONBin for now
        // const { navigation } = this.props;
        // const query = navigation.getParam('query', '');
        // let url = `http://developer.myntra.com/search/data/${query}`;
        const url = 'https://api.jsonbin.io/b/5efb732c7f16b71d48a8cd5d/1';

        // Networking using fetch  & async-await
        // Read more: https://facebook.github.io/react-native/docs/network.html
        let response = await fetch(url, {
            method: 'GET',
        });
        let responseJson = await response.json();
        this.setState({
            loading: false,
            products: responseJson.products,
        });
    }

    renderItem ({ index, item }) {
		return (
			<Product
				productData={item}
				position={index}
				handlePress={this.handlePress}
			/>
		);
	}

	render() {
        if (this.state.loading) {
            return (<View style={styles.container}>
                <Text style={styles.text}> loading... </Text>
            </View>);
        }
		return (
			<FlatList
                contentContainerStyle={styles.listContainer}
                data={this.state.products}
                numColumns={2}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                removeClippedSubviews
            />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        paddingTop: 10,
        backgroundColor: '#fff',
    },
    text: {
        color: '#94989f',
    },
});