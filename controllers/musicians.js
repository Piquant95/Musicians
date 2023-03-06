const express = require('express');
// Router is what we use in the controllers instead of app.
// Instead of just express(), It's express.Router(). This makes it easier to export all
// of the routes in the entire file easily.
const router = express.Router();

// whenever i want to use a real route, use res.render / res.send is the console.log of express
// make sure you're hitting the right route
router.get('', (req, res) => {
    res.render('musicians/index.ejs')
})



module.exports = router;