import React from 'react';
import Product from '../../components/Product';

const PDP = (props) => {
    const { navigation } = props;
    const data = navigation.getParam('data', '');
    return (
        <Product
            isPDP
            productData={ data }
        />
    );
};

export default PDP;