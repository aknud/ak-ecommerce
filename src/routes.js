import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Products from './Components/Products';

export default (
    <Switch>
        <Route exact path="/" component={Products}/>
        <Route exact path="/cart" component={Cart}/>
    </Switch>
)