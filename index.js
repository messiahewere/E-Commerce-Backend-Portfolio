const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/product-route');
const authRoutes = require('./routes/auth-route');
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require("./swagger/swagger");


const port = process.env.PORT || 3000;

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected. Attempting to reconnect...");
  mongoose.connect(process.env.MONGO_URI);
});
