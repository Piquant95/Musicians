const express = require('express');
// Router is what we use in the controllers instead of app.
// Instead of just express(), It's express.Router(). This makes it easier to export all
// of the routes in the entire file easily.
const router = express.Router();
// This is saying that i want the value of the musicians from the object that was export. This is our ES6 detructuring syntax. If I point it to a directory, it automatically assumes an index.js file.
const { Musicians } = require('../models')

// whenever i want to use a real route, use res.render / res.send is the console.log of express
// make sure you're hitting the right route
router.get('/', async (req, res, next) => {
    try {
        const myMusicians = await Musicians.find({})
        console.log(myMusicians);
        const context = {
            musicians: myMusicians
        }
    res.render('musicians/index.ejs', context)
} catch(err) {
    console.log(err);
    return next();
   }
});



module.exports = router;