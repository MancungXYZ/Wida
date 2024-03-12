const Orders = require('../model/Orders')
const router = require('express').Router()

function generateInvoiceNumber() {
    // Mendefinisikan karakter yang akan digunakan dalam nomor invoice
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8; // Panjang nomor invoice yang diinginkan
  
    let invoiceNumber = '';
  
    // Mengisi nomor invoice dengan karakter acak
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      invoiceNumber += characters[randomIndex];
    }
  
    return invoiceNumber
}

const invoiceNumber = generateInvoiceNumber();

router.post("/addorder", async (req, res) => {
    const newOrder = new Orders({
        noInvoice: invoiceNumber,
        date: req.body.date,
        customer: req.body.customer,
        salesPerson: req.body.salesPerson,
        paymentType: req.body.paymentType,
        notes: req.body.notes
    })

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
        console.log(error)
    }
})

router.get("/", async (req, res) => {
    try {
        const cariOrders = await Orders.find();
        res.status(200).json(cariOrders);
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan server" });
    }
});

module.exports = router