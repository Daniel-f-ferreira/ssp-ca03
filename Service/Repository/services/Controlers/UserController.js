const express = require('express');
const router = express.Router();
const path = require('path');

const userService = require('../services/UserService.js');

router.post('/user/authentication', function (req, res) {
    
    userService.authentication(req.body)
    .then(function(result) {
        return res.status(200).json(result);
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

module.exports = router;
