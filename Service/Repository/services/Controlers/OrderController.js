const express = require('express');
const router = express.Router();
const path = require('path');

const orderService = require('../services/OrderService.js');

router.get('/orders', function (req, res) {

    orderService.getOrder()
    .then(function(result) {
        return res.status(200).json(result);
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });
    
});

router.post('/orders', function (req, res) {
    
    orderService.insertOrder()
    .then(function(result) {
        return res.status(201).json('Insert order');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

router.put('/orders', function (req, res) {
    
    orderService.updateOrder()
    .then(function(result) {
        return res.status(201).json('Update order');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

router.delete('/orders', function (req, res) {
    
    orderService.deleteOrder()
    .then(function(result) {
        return res.status(201).json('Delete order');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

module.exports = router;