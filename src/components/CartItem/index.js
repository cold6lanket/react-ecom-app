import React, { useState } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';


const CartItem = ({ item, onRemoveItem }) => {
    const [count, setCount] = useState(1);
    const classes = useStyles();



    return (
        <Card className="cart-item">
            <CardMedia image={item.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.price * count}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button onClick={() => setCount(prev => prev - 1)} type="button" size="small" >-</Button>
                    <Typography>&nbsp;{count}&nbsp;</Typography>
                    <Button onClick={() =>  setCount(prev => prev + 1)} type="button" size="small" >+</Button>
                </div>
                <Button 
                    onClick={() => onRemoveItem(item.id)}
                    variant="contained" 
                    type="button" 
                    color="secondary">Remove</Button>
            </CardActions>
        </Card>
    );
};





export default CartItem;