'use strict';

//this is an npm dependency or package that we installed via "npm i express"
//the reference to this dependency lives in our package.json file
const express = require('express');

//this pulls in the express object so we can use its methods
const app = express();

//the port to accept traffic on
const PORT = 3000;

//use this, dont worry about what it does yet. 
app.use(express.static('./public'));

//thuis is our homepage -> it will serve up a simple html file
app.get('/',(request,response) => {
    response.sendFile('./public/index.html');
});

//this is an apli route - it is meant to serve up data -> json
//route localhost:3000/test
app.get('/user-data', (request, response) => {
    response.json({username: 'dayoub', name: "Dina Ayoub"});

    //next week:
    //go to a database
    //find the user in the db
    //get the user from the db
    //hand off the user to the user interface
});

//this sets up my server to accept incoming traffic at a specific PORT
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

