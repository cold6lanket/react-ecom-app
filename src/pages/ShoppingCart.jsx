import React from 'react';
import { connect } from 'react-redux';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from '../components/CartItem';
import EmptyCart from '../components/EmptyCart';
import { emptySelectedItems, removeSelectedItem } from '../actions';
 


function ShoppingCart({ cartItems, dispatch }) {

    const isEmpty = !cartItems.length;

    const classes = useStyles();

    const onRemoveItem = (id) => dispatch(removeSelectedItem(id));
    const onEmptyItems = () => dispatch(emptySelectedItems());


    const FilledCart = () => {
        return(
            <>
                <Grid container spacing={3}>
                    {cartItems.map(cart => {
                        return(
                            <Grid key={cart.id} item xs={12} sm={4}>
                                <CartItem onRemoveItem={onRemoveItem} item={cart}/>
                            </Grid>
                        );
                    })}
                </Grid>
        
                <div className={classes.cardDetails}>
                    <Typography variant="h4">Subtotal: {cartItems.length}</Typography>
                    <div>
                        <Button
                            onClick={onEmptyItems} 
                            className={classes.emptyButton} 
                            size="large" 
                            type="button" 
                            variant="contained"
                            color="secondary">Empty Cart</Button>
                        <Button 
                            className={classes.checkoutButton} 
                            size="large" 
                            type="button" 
                            variant="contained"
                            color="primary">Purchase</Button>
                    </div>
                </div>
            </>
        );
    };

    return (
        <Container>
            <Typography className={classes.title} variant="h3">
                Your Shopping List
            </Typography>
            {isEmpty ? <EmptyCart/> : <FilledCart/>}
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        // cartItemsTotal: state.addedItems.reduce((count, curItem) => {
        //     return count + (curItem.price * curItem.quantity);
        // }, 0),
        cartItems: state.addedItems
    };
};



export default connect(mapStateToProps)(ShoppingCart);