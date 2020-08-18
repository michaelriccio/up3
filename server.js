
const dataHolder = [];// Setup empty JS object to act as endpoint for all routes
const weatherJournal = {};

const express = require('express');// Express to run server and routes

const app = express();// Start up an instance of app

const bodyParser = require('body-parser');/* Dependencies */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');/* Middleware*/
app.use(cors());

app.use(express.static('public'));// Initialize the main project folder

// Callback to debug

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/all', (request, response) => {
    response = "GET response";
    request.body = dataHolder;
})

// Post Route
app.post('/post', (request, response) => {
    console.log(request.body);
    let data = request.body;
    dataHolder.push(data);
    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.long
    })
});


// Spin up the server
const port = 3000;
app.listen(port, () => {console.log(`using localhost: ${port}`);});