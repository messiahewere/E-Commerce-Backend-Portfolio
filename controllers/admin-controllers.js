const cartSchema = require('../schema/cart-schema');

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




module.exports = {
    getAllOrders,
    updateOrderStatus,
    deleteOrder
}
