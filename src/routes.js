import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Products from './Components/Products';

export default (
    <Switch>
        <Route path="/cart" component={Cart}/>
        <Route exact path="/" component={Products}/>
    </Switch>
)