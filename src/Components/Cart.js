import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import Nav from './Nav';
import { getCart } from './../ducks/reducer';

class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			quantity: 1
		};
	}
	componentDidMount() {
		axios
			.get('/api/cart')
			.then((items) => {
				this.props.getCart(items.data);
			})
			.catch((err) => console.log('Something broke', err));
	}
	updateQuantity = (cart_id, quantity) =>{
		axios.put(`/api/update/${cart_id}`, {quantity}).then((items) => {
			this.props.getCart(items.data);
			console.log('item to be updated', cart_id);
			console.log('quantity', quantity);
			swal({
				title: "Quantity Updated!",
				text: "Continue Shopping!",
				icon: "success",
				button: "Cool!",
			});
		})
		.catch((err) => console.log('Something broke in update', err));
	}
	removeFromCart = (cart_id) => {
		axios
			.delete(`/api/delete/${cart_id}`)
			.then((items) => {
				this.props.getCart(items.data);
				console.log('item to be deleted', cart_id);
			})
			.catch((err) => console.log('Something broke in delete', err));
	};
	emptyCart = (user_id) => {
		axios.delete(`/api/emptycart/${user_id}`).then(updateCart => {
			this.props.getCart(updateCart.data)
			console.log('data coming back from emptycart', updateCart.data)
		})
		swal({
			title: "Transaction Complete!",
			text: "Continue Shopping!",
			icon: "success",
			button: "Hooray!",
		});
	}

	render() {
		const { cart } = this.props;
		let displayCart = cart.map((item) => {
			return (
				<div key={item.cart_id} className="cart_items" style={{ border: '2px solid black', width: '450px' }}>
					<p>cart_id:{item.cart_id}</p>
					<p>product:{item.item}</p>
					<p>price:{item.price}</p>
					<p>quantity:{item.quantity}</p>
					Update Quantity:<select name="quantity" value={this.state.value} onChange={(e)=>this.updateQuantity(item.cart_id, e.target.value)}>
						<option value="NULL"></option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<p>total:{item.quantity * Number(item.price.replace(/[$]+/g, ''))}</p>
					<p>product_id:{item.product_id}</p>
					<img src={item.img} alt={item.item} />
					<button onClick={() => this.removeFromCart(item.cart_id)}>delete</button>
				</div>
			);
		});
		return (
			<div className="cart_main">
				<Nav />
				<h1>Cart</h1>
				<button onClick={()=>this.emptyCart(1)}>Pay</button>
				{displayCart}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		cart: state.cart
	};
};

export default connect(mapStateToProps, { getCart })(Cart);
