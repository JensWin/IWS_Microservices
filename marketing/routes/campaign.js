const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const campaignSchema = require("../models/campaignSchema");

/* get all campaigns */
router.get('/', function(req, res, next) {
    campaignSchema.find({}, function (err, campaigns) {
        res.json(campaigns);
    })
});
/* create new campaign */
router.post("/", function (req, res, next) {

    const campaign = new campaignSchema({
        _id: new mongoose.Types.ObjectId(),
        product_id: req.body.product_id,
        date_from: new Date(req.body.date_from),
        date_to: new Date(req.body.date_to),
        discount: req.body.discount
    });

    campaign
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "campaign created"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
        })
    });
});
/* delete campaign by id*/
router.delete("/:id", function (req, res, next) {
    const id = req.params.id;
    campaignSchema.deleteOne({ _id: id }, function (err) {
        if (err){
            res.send(err.toString());
        }else{
            res.json("successfully deleted");
        }

    });
});
/* get campaign by id*/
router.get("/:id", function (req, res, next) {
    const id = req.params.id;
    campaignSchema.findById(id, function (err, campaign){
        if (err){
            res.send(err.toString());
        }else{
            res.json(campaign);
        }
    });
});

module.exports = router;