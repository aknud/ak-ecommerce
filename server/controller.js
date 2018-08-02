module.exports = {
    create: (req, res) => {
        const dbi = req.app.get('db');
        const {item, price, img} = req.body;
        dbi.add_product([item, price])
    },
    getAllProducts: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_all_product().then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'This is why we cant have nice things.' });
            console.log(err);
        });
    },
    getCart: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_cart().then(products=> res.status(200).send(products))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'This is why we cant have nice things.' });
            console.log(err);
        });
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
}