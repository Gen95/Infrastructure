const express = require('express');
const cors = require ('cors')

const port = 3002;
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express()


// Use Node.js body parsing middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});