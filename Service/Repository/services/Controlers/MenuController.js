const express = require('express');
const router = express.Router();
const path = require('path');

const menuService = require('../services/MenuService.js');

router.get('/menu/html', function (req, res) {
   
    res.writeHead(200, {'Content-Type' : 'text/html'});

    var result = menuService.transformerXSLT();

    res.end(result.toString());
       
});

router.get('/menu', function (req, res) {
   
    menuService.getAllMenuItem()
    .then(function(result) {
        return res.status(200).json(result);
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });   
       
});

router.post('/menu', function (req, res) {

    menuService.insertMenuItem()
    .then(function(result) {
        return res.status(201).json('Insert menu item');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });   

});

router.put('/menu', function (req, res) {

    menuService.updateMenuItem()
    .then(function(result) {
        return res.status(200).json('Update menu item');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

router.delete('/menu', function (req, res) {

    menuService.deleteMenuItem()
    .then(function(result) {
        return res.status(200).json('Delete menu item');
    })
    .catch(function(error) {
        return res.status(500).json(error);
    });

});

module.exports = router;