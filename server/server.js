const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

// Middleware
const GetAllFromGear = require("./Middleware/GetAllFromGear");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/static", express.static(path.resolve(__dirname, "../build/static")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build/index.html"));
});

app.get('/packing_list', GetAllFromGear, (req, res) => {
    res.send({
        data: res.locals.data,
        node: 200,
     });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
