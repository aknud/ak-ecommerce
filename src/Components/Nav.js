import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    let style = {
        width: "100%",
        height: "100px",
        backgroundColor: "grey",
        span: {
            fontSize: "20px",
            textDecoration: "none"
        }
    }

    return (
        <div className="nav_main" style={style} >
        <Link to='/'><span>Store</span></Link>
        <Link to='/cart'><span>Cart</span></Link>
        </div>
    )
}

