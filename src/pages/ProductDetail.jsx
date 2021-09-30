import React from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';
import ProductImage from '../components/ProductImage';
import ProductInfo from '../components/ProductInfo';
import { catalogAdded } from '../actions';

const ProductDetail = ({ product, dispatch }) => {
    const onAdd = () => dispatch(catalogAdded(product.id)); 

    return (
        <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12} sm={8}  md={6} lg={5}>
                <ProductImage link={product.image} desc={product.desc} />
            </Grid>
            <Grid item xs={12} sm={8}  md={6} lg={5}>
                <ProductInfo data={product} handleCartAdd={onAdd} />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state, props) =>  {

    const product = state.products.find(product => product.id === +props.match.params.id);

    return {
        product
    }
};

export default connect(mapStateToProps, null)(ProductDetail);