import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCart} from './../ducks/reducer';

class Cart extends React.Component {
	componentDidMount(){
		axios.get('/api/cart').then(items => {
			console.log('cart data', items.data)
			this.props.getCart(items.data)
		}).catch(err => console.log('Something broke', err));
	}
	render() {
		const { cart} = this.props;
		let displayCart = cart.map(item => {
			return (
				<div key={item.product_id} className="cart_items">
				<p>cart_id:{item.cart_id}</p>
				<p>product:{item.item}</p>
				<p>product:{item.price}</p>
				<p>quantity:{item.quantity}</p>
				<p>product_id:{item.product_id}</p>
				<img src={item.img} alt=""/>
				</div>
			)
		})
		return (
			<div className="cart_main">
				<h1>Cart</h1>
				{displayCart}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		cart: state.cart
	}
}

export default connect(mapStateToProps, {getCart})(Cart);
