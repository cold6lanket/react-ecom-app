import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart, FavoriteBorderSharp } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavouriteItem } from '../../actions';
import makeStyles from './styles';
import hlogo from '../../assets/hlogo.png';
import Categories from '../Categories/Categories';
import Modal from '../Modal/Modal';
import { useToggle, showFavouriteItems } from './helpers';

function Navbar({ quantity, favouriteQuantity, favouriteItems, removeFavouriteItem }) {
    //const [isOpen, setIsOpen] = React.useState(false);
    const classes = makeStyles();
    const location = useLocation();
    const [value, toggleValue] = useToggle(false);

    const deleteFavourite = (id) => {
        removeFavouriteItem(id);
    };

    return (
        <>
            <AppBar 
                position="fixed" 
                className={classes.appBar}
                color="inherit"
            >
                <Toolbar>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="subtitle1" className={classes.title} color="inherit">
                            <img src={hlogo} alt="shop logo" height="25px" className={classes.image} />
                            Ecom
                        </Typography>

                        {location.pathname === '/products' ? <Categories /> : null}
                        
                    </div>
                    
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        
                        <IconButton onClick={()=> toggleValue(true)} aria-label="Show cart items" >
                            <Badge badgeContent={favouriteQuantity} color="secondary">
                                <FavoriteBorderSharp />
                            </Badge>
                        </IconButton>
                        <Modal open={value} >
                            {showFavouriteItems(favouriteItems, deleteFavourite)}
                        </Modal>
                        
                
                        <Link to="/cart">
                            <IconButton aria-label="Show cart items">
                                
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCart />
                                </Badge>
                                
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>   
        </>
    );
}

const mapStateToProps = ({ addedItems, favouriteItems }) => {
    const productQuantity = addedItems.length;
    const favouriteQuantity = favouriteItems.length;

   
   
    return {
        quantity: productQuantity,
        favouriteQuantity,
        favouriteItems, 
    };
};

const mapDispatchToProps = { removeFavouriteItem };


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);