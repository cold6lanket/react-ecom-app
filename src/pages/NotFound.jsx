import React from 'react';
import { Link } from 'react-router-dom';
import {  Divider, Typography } from '@material-ui/core';
import NotFoundImage from '../assets/notfound.jpg';

const styles = { 
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    maxWidth: '50rem', 
    margin: '0 auto', 
    textAlign: 'center' 
};

const NotFound = (props) => {
    return (
        <div style={styles}>
            <img src={NotFoundImage} alt="not found" />
            <Divider />
            <Link to="/products"><Typography>Go to main page</Typography></Link>
        </div>
    );
}

export default NotFound;