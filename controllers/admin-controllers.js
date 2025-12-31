const cartSchema = require('../schema/cart-schema');
const productSchema = require('../schema/product-schema');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const getAllOrders = async (req, res) => {
    // Logic to get all orders from the database
    try {
        const allOrders = await cartSchema.find();
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
}

const updateOrderStatus = async (req, res) => {
    // Logic to update order status in the database
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updateStatus = await cartSchema.findByIdAndUpdate(id, { status }, { new: true });
        if (!updateStatus) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(updateStatus);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order status', error });
    }
}


const deleteOrder = async (req, res) => {
    // Logic to delete order from the database
    const { id } = req.params;

    try {
        const deleteOrder = await cartSchema.findByIdAndDelete(id);
        if (!deleteOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error });
    }
}

const createProduct = async (req, res) => {
    try {
        const { title, description, price, category, brand, rating, stock } = req.body;
        
        const images = req.files ? req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`) : [];
        
        const newProduct = new productSchema({
            title,
            description,
            price: parseFloat(price),
            category,
            brand,
            rating: parseFloat(rating),
            stock: parseInt(stock),
            images
        });
        
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productSchema.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
}




module.exports = {
    getAllOrders,
    updateOrderStatus,
    deleteOrder,
    createProduct,
    deleteProduct,
    upload
}
