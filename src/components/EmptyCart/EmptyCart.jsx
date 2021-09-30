import React from "react";
import { Link  } from 'react-router-dom';

import { Typography } from '@material-ui/core';


const EmptyCart = () => {
    return(
        <>
            <Typography variant="h6">Empty basket, please add products. <Link to="/">Go to main page</Link></Typography>
            <img src="https://professionalscareer.com/assets/images/emptycart.png" alt="empty cart"/>
        </>
    );
};

export default EmptyCart;