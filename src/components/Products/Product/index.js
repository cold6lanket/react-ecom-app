import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

import { AddShoppingCart, FavoriteBorderSharp } from '@material-ui/icons';

import useStyles from './styles';
import { connect } from 'react-redux';
import { catalogAdded, addFavouriteItem } from '../../../actions';



function Product({ product, catalogAdded, addFavouriteItem }) {
    const classes = useStyles();

    const onCartAdd = () => {
        catalogAdded(product.id);
    };

    const onFavouriteAdd = () => {
        addFavouriteItem(product.id);
    };


    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                image={product.image} 
                title={product.name} 
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        <Link to={`/products/${product.id}`} >{product.name}</Link>
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {product.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                    onClick={onFavouriteAdd} 
                    aria-label="add to favourite"
                >
                    <FavoriteBorderSharp />
                </IconButton>
                <IconButton 
                    onClick={onCartAdd}
                    aria-label="add to card"
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
}

const mapDispatchToProps = { catalogAdded, addFavouriteItem };

export default connect(null, mapDispatchToProps)(Product);