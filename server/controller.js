module.exports = {
    create: (req, res) => {

    },
    read: (req, res) => {
        const dbi = req.app.get('db');
        dbi.get_all_product().then(products=> res.status(200).send(products))
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