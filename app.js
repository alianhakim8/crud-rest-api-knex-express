const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './' });

const app = express();
const PORT = 5000;
const routes = require('./app/routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: '8mb'
}));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.DOMAIN); // update to match the domain you will make the request from

    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});

app.get('/', (req, res) => {
    res.send('App is working');
});

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = {
    app
}