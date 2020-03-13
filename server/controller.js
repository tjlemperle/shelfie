module.exports = {
    getInventory: (req,res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then(product => res.status(200).send(product))
        .catch(err => console.log({err}))
    },

    newProduct: (req,res) => {
        const db = req.app.get('db')
        let {name, price, img} = req.body


        db.create_product([name, img, price])
        .then(() => {res.sendStatus(200);})
        .catch(err => {res.status(500).send(err)})
    }
}