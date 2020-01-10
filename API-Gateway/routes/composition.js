const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const httpProxy = require('express-http-proxy');
const request = require('request');

const basketServiceProxy = httpProxy('localhost:5000');

// benötigt
//Warenkorb abfragen -> (Komposition /basket/:id + /product/:id + /marketing/productid/:id)
//produkt abfragen -> (/product/:id + /marketing/productid/:id)
//alle produkt abfragen -> (/product/ + /marketing/)

router.get('/basket', function(req, res, next) {
    basketServiceProxy(req, res, next);
});

module.exports = router;