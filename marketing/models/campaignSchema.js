const mongoose = require('mongoose');

const campaignSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_id: { type: String, required: true },
    date_from: { type: Date, required: true },
    date_to: { type: Date, required: true },
    discount: { type: Number, required: true }
});

module.exports = mongoose.model('campaign', campaignSchema);