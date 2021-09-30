import React from 'react';
import { Typography } from '@material-ui/core';

import './ProductImage.css';

const ProductImage = ({ link, desc }) => {
    return (
        <div className="product-image">
            <img src={link} alt={desc}></img>
            <Typography align='center' variant="body2" color="textSecondary" gutterBottom>{desc}</Typography>
        </div>
    );
}

export default ProductImage;