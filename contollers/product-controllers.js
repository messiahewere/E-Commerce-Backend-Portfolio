const Product = require('../schema/product-schema');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
};

const createAProduct = async (req, res) => {
    try {
        const {title, description, price, category, brand, rating, stock, images} = req.body;
        const product = await Product.create({title, description, price, category, brand, rating, stock, images});
        res.status(201).json(product);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
};

const editAProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, price, category, brand, rating, stock, images} = req.body;
        const updated = await Product.findByIdAndUpdate(id, {title, description, price, category, brand, rating, stock, images}, 
                        {new: true});
        if(updated) {
            res.status(200).json(updated);
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
};

const deleteAProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Product.findByIdAndDelete(id);
        if(deleted) {
            res.status(200).json({message: 'Product deleted successfully'});
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = { getAllProducts, createAProduct, editAProduct, deleteAProduct};