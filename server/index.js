const express = require("express");
const cors = require("cors");
const Ctrl = require("./controller");


const app = express();

app.use(cors());
app.use(express.json());

// SERVER_PORT
const port = 4000

app.listen(port, () => console.log(`Server running on port: ${port}`))