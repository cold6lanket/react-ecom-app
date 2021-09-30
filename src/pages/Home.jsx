import React from 'react';
import FilterSection from '../components/FilterSection/FilterSection';
import Products from '../components/Products/Products';
import { Grid } from '@material-ui/core';


function Home(props) {

    return (
        <Grid container justifyContent="center" spacing={3}>
            <Grid item  xs={12} sm={5}  md={3} lg={2}>
                <FilterSection />
            </Grid>
            <Grid item  xs={12} sm={12}  md={8} lg={9}>
                <Products />
            </Grid>
        </Grid>
    );
}

export default Home;