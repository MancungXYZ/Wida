const Products = require('../model/Products')
const router = require('express').Router()

router.post("/addproducts", async (req, res) => {
    const newProduct = new Products({
        item: req.body.item,
        quantity: req.body.quantity,
        totalCogs: req.body.totalCogs,
    })

    try {
        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const cariProduct = await Products.find();
        res.status(200).json(cariProduct);
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan server" });
    }
});

router.get("/getbook", async (req, res) => {
    try {
        const cariBuku = await Book.find({
            stock: {
                $gt: 0
            }
        })
        res.status(200).json(cariBuku)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router