const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/product-route');
const authRoutes = require('./routes/auth-route');


const port = 3000;

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
        app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
});
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

dbConnect();

