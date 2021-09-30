import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShoppingCart from './pages/ShoppingCart';
import useStyles from './components/Products/styles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Notification from './components/Notification';
import ProductDetail from './pages/ProductDetail';

/* Issue 1. Radio button on filter section has to be reset on each catalog change */
/* Issue 2. Remove pointer events when seleceted = 'all' or main page */
/* Issue 3. hide categories at navbar section when user clicks or transitions to shopping cart component */
/* Issue 4. implement a function that increments/decrements product quantity in shopping cart component */
/* Issue 5. create a component (page) for product description in pages folder */
/* Issue 6. create not found component for react router */
/* Issue 7. finish favourite modal */
/* Issue 8. fix issue 4. */
// end project

const App = () => {
    const classes = useStyles();
    

    return (
        <Router>
            <>
                <Navbar />
                <Notification />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>
                        <Route exact path={'/'}  render={() => <Redirect to={'/products'}/> } />
                        <Route exact path={'/products'} component={Home} />
                        <Route exact path={'/products/:id'} component={ProductDetail} />
                        <Route exact path={'/cart'} component={ShoppingCart}/>
                        <Route exact path="*" component={NotFound} />
                        
                    </Switch>
                </main>
            </>
        </Router>
    );
};


export default App;