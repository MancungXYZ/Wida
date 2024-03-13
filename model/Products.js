const mongoose = require("mongoose")

const Products = new mongoose.Schema({
    item: {type: String, required:true},
    quantity: {type: Number},
    totalCogs: {type: Number},
    img: {type: String},
    stock: {type: Number}
}, {timestamps: true},
);

module.exports = mongoose.model("Products", Products)