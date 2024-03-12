const mongoose = require("mongoose")

const Orders = new mongoose.Schema({
    noInvoice: { type: String, required:true},
    date: {type: String},
    customer: {type: String},
    salesPerson: {type: String},
    paymentType: {type: String},
    notes: {type: String},
    products: {type: Array},
    amount: {type: Number}
}, {timestamps: true},
);

module.exports = mongoose.model("Orders", Orders)