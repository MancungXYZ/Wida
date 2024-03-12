const { error } = require('console')
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

const productRoute = require('./routes/products')
const orderRoute = require('./routes/orders')

dotenv.config()


app.use(express.json()) //mengizinkan menggunakan json
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())

// Middleware untuk menangani tipe konten
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const conn = mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongodb berhasil terkoneksi")).catch((error) => console.log(error))

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)

app.listen(port, () => {
  console.log(`Backend berjalan pada port ${port}`)
})