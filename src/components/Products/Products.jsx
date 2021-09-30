import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import { productsLoaded } from '../../actions';
import productData from '../../data/productData';



function Products({ productsLoaded, products }) {

    useEffect(() => {
        productsLoaded(productData);
    }, [productsLoaded]);


    if (!products) return <Spinner />;

    return (
        <>
            <Grid container justifyContent="center" spacing={3}>
                {products.map(product => {
                    return (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

const brandFilter = (arr, brand) => {
    if (brand.length === 0) return arr;

    return arr.filter(product => brand.includes(product.brand));
};

const mapStateToProps = ({ products, selected, priceSortFrom, brandsFilter }) => {
    // const filtered = products.filter(item => item.category === selected);
    // console.log(addedItems);

    if (selected === 'all') return { products };

    const sorted = brandFilter([...products], brandsFilter);

    if (priceSortFrom === 'LOW') {
        sorted.sort((a, b) => a.price > b.price ? 1 : -1);
    } else if (priceSortFrom === 'HIGH') {
        sorted.sort((a, b) => a.price < b.price ? 1 : -1);
    }

    return {
        products: sorted.filter(item => item.category === selected),
    };
  
};

const mapDispatchToProps = { productsLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Products));