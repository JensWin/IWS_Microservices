const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const httpProxy = require('express-http-proxy');
const request = require('request');
const config = require('../config/default.json');

const basketURL= config.Nodes.basketURL;
const marketingURL= config.Nodes.marketingURL;
const productURL= config.Nodes.productURL;
const paymentURL= config.Nodes.paymentURL;

// benötigt
//Warenkorb abfragen -> (Komposition /basket/:id + /product/:id + /marketing/productid/:id)
//produkt abfragen -> (/product/:id + /marketing/productid/:id)
//alle produkt abfragen -> (/product/ + /marketing/)

router.get('/basket', function(req, res, next) {

});

module.exports = router;