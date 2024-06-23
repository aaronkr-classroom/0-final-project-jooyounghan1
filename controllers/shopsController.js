const Shop = require('../models/Shop');

exports.createShop = async (req, res) => {
    try {
        const newShop = new Shop(req.body);
        const shop = await newShop.save();
        res.status(201).json(shop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getShops = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.status(200).json(shops);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getShopById = async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.status(200).json(shop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateShop = async (req, res) => {
    try {
        const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.status(200).json(shop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteShop = async (req, res) => {
    try {
        const shop = await Shop.findByIdAndDelete(req.params.id);
        if (!shop) {
            return res.status(404).json({ error: 'Shop not found' });
        }
        res.status(200).json({ message: 'Shop deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
