import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getProduct} from './../ducks/reducer'

class Products extends React.Component {

	componentDidMount(){
		axios.get('/api/products').then(products => {
			console.log('products.data',products.data)
			this.props.getProduct(products.data)
		}).catch(err => console.log('Something broke', err));
	}
    render() {
		const {products} = this.props;
		let displayProduct = products.map(product => {
			return (
				<div className="product_item" key={product.product_id}>
				<img src={product.img} alt={product.item}/>
				<p>{product.item}</p>
				<p>${product.price}</p>
				</div>
			)
		})
		return (
			<div className="products_main">
				<h1>Products</h1>
				{displayProduct}
			</div>
		);
    }
}
const mapStateToProps = (state) => {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, {getProduct})(Products);