import React from 'react';
import { ScrollView } from 'react-native';
import Product from '../../components/Product';

const PDP = (props) => {
    const { navigation } = props;
    const data = navigation.getParam('data', '');
    return (
        <ScrollView>
            <Product
                isPDP
                productData={ data }
            />
        </ScrollView>
    );
};

export default PDP;