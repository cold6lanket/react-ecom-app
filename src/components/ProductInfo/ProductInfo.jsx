import React from 'react';
import {  Divider, Typography, Button } from '@material-ui/core';
import './ProductInfo.css';


const ProductInfo = ({ data, handleCartAdd }) => {
    const { 
        category, 
        name, 
        primaryDesc,
        highlights, 
        price 
    } = data;

    return(
        <>
            <div className="product-description">
                <Typography gutterBottom variant='h6'>{category}</Typography>
                <Typography gutterBottom variant='h3'>{name}</Typography>
                <Typography variant='subtitle1'>{primaryDesc}</Typography>
            </div>

            <div className="product-configuration">
                <Divider variant='middle' />
                <ul>
                    {highlights && highlights.map(item => (<li key={item.id}><Typography color='primary'>{item.highlight}</Typography></li>))}
                </ul>
                <Divider variant='middle' />
            </div>


            <div className="product-price">
                <Typography variant="h5">{price}$</Typography>
                <Button
                    type="button" 
                    variant="outlined"
                >Add to credit</Button>
                <Button
                    onClick={handleCartAdd}
                    type="button" 
                    variant="contained"
                    color="primary"
                >Add to cart</Button>
            </div>
        </>
    );
};

export default ProductInfo;