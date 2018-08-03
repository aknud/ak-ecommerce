import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import Nav from './Nav';
import { getProduct, getCart } from './../ducks/reducer';

class Products extends React.Component {
	componentDidMount() {
		axios
			.get('/api/products')
			.then((products) => {
				console.log('products.data', products.data);
				this.props.getProduct(products.data);
			})
			.catch((err) => console.log('Something broke', err));
	}
	add = (product_id) => {
		axios
			.post('/api/add', { product_id })
			.then((updatedCart) => {
				console.log('item going to cart', updatedCart.data);
				this.props.getCart(updatedCart.data);
				swal({
					title: "Item Added!",
					text: "Continue Shopping!",
					icon: "success",
					button: "Cool!",
				});
			})
			.catch((err) => console.log('Something broke', err));
	};
	render() {
		const { products } = this.props;
		let displayProduct = products.map((product) => {
			return (
				<div className="product_item" key={product.product_id}>
					<img src={product.img} alt={product.item} />
					<p>{product.item}</p>
					<p>${product.price}</p>
					<button onClick={() => this.add(product.product_id)}>Add to cart</button>
				</div>
			);
		});
		return (
			<div className="products_main">
				<Nav />
				<h1>Products</h1>
				{displayProduct}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};
export default connect(mapStateToProps, { getProduct, getCart })(Products);
