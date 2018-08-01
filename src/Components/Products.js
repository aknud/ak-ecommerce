import React from 'react';
import {getProducts} from './../ducks/reducer'

class Products extends React.Component {

    render() {
		return (
			<div className="products_main">
				<h1>Products</h1>
			</div>
		);
    }
}
const mapStateToProps = (state) => {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, {getProducts})(Products);