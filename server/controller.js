module.exports = {
    addToCart: (req, res) => {
        const dbi = req.app.get('db');
        const {product_id} = req.body;
        dbi.add_to_cart([product_id]).then(products => res.status(200).send(products)).catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in addToCart in controller.' });
            console.log(err);
        });
    },
    getAllProducts: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_all_product().then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in getAllProducts in controller.' });
            console.log(err);
        });
    },
    getCart: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_cart().then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in getCart in controller.' });
            console.log(err);
        });
    },
    updateQuantity: (req, res) => {
        const dbi = req.app.get('db');
        const {id} = req.params;
        console.log(id)
        const { quantity } = req.body;
        console.log(quantity)
        dbi.update_quantity([id, quantity]).then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in updateQuantity in controller.' });
            console.log(err);
        });
    },
    deleteProduct: (req, res) => {
        const dbi = req.app.get('db');
        const {id} = req.params;
        dbi.delete_from_cart([+id]).then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in deleteProduct in controller.' });
            console.log(err);
        });
    },
    emptyCart: (req, res) => {
        const dbi = req.app.get('db');
        const {id} = req.params;
        dbi.empty_cart([id]).then(cart => {
            res.status(200).send(cart)
        }).catch((err) => {
            res.status(500).send({ errorMessage: 'Something broke in emptyCart in controller.' });
            console.log(err);
        });
    }
}