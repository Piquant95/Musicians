// I need to establish express to run
const express = require('express');
const app = express();
// This is bringing in the exports from my musicians controller
const musiciansController = require('./controllers/musicians.js');

// This is setting up that ejs will be used in this project and will be set to a directory named views.
// The directory has to be named views.
app.set('view engine', 'ejs');

// I want to make sure that I can have a generic home route first but i also want my musicians contorller to be read
// before any * or catch all


// All of my routes

app.get('/', (req, res) => {
    res.render('home.ejs');
})
// app.use is saying I want to use all of the functionality of the imports from
// my musicisans AbortController. And the fisrst argument is saying the base URL is now 
// http://localhost:4000/musicians when that file is read.
app.use('/musicians', musiciansController);

app.get('/*', (req, res) => {
    res.render('404.ejs');
})




app.listen(4000, () => {
    console.log("listening on port 4000");
})