import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const rowWidth = (screenWidth - 3 * itemSpacing) / 2;
const aspectRatio = 3 / 4;


const Product = props => {
	const {
		productData = {},
		handlePress,
    } = props;
    const handleProductPress = () => handlePress(productData.styleid);
	return (
		<View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={handleProductPress}
            >
                <View>
                    <Image
                        source={{ uri: productData.search_image }}
                        style={styles.image}
                    />
                    <Text style={styles.brand}>{ productData.brands_filter_facet }</Text>
                    <Text style={styles.price}>{ `\u20B9${productData.price}` }</Text>
                    <Text style={styles.desc}>{ productData.product_additional_info }</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
	);
};


const styles = StyleSheet.create({
	image: {
		width: rowWidth,
        height: rowWidth / aspectRatio,
        borderColor: '#d5d6d9',
		borderWidth: 0.5,
    },
    container: {
        paddingLeft: itemSpacing,
        backgroundColor: '#ffffff',
    },
    brand: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 14,
        color: '#161925',
        width: rowWidth,
    },
    price: {
        marginTop: 5,
        fontSize: 14,
        color: '#94989f',
        width: rowWidth,
    },
    desc: {
        marginTop: 5,
        fontWeight: '200',
        marginBottom: 20,
        fontSize: 11,
        color: '#94989f',
        width: rowWidth,
    },
});

export default Product;

