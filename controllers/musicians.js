const express = require('express');
// Router is what we use in the controllers instead of app.
// Instead of just express(), It's express.Router(). This makes it easier to export all
// of the routes in the entire file easily.
const router = express.Router();

router.get('', (req, res) => {
    res.send('<h1>This is my list of musicians</h1>')
})



module.exports = router;