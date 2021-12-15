const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('total');
})

module.exports = router;