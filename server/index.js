require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      {SERVER_PORT, CONNECTION_STRING} = process.env

const cors = require("cors");
const app = express();

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('DB connected')
})

app.use(cors());
app.use(express.json());

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.newProduct)


const port = SERVER_PORT

app.listen(port, () => console.log(`Server running on port: ${port}`))