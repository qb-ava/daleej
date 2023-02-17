const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname + "/home-front/home.html")
});

module.exports = router;