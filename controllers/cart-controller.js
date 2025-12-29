const Cart = require('../schema/cart-schema')
const Auth = require('../schema/auth-schema')

const createCart = async (req, res) => {
    try {
        const validUser = await Auth.findById(req.user.userId)
        if (!validUser) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const {total, orderDate, status, products} = req.body;
        const cart = await Cart.create({userId: req.user.userId, total, orderDate, status, products})
        res.status(201).json(cart)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCart = async (req, res) => {
    try {
        const validUser = await Auth.findById(req.user.userId)
        if (!validUser) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const cart = await Cart.find({userId: validUser.userId})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createCart, getCart }