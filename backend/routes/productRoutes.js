const express = require('express');
const productController = require('../controllers/productController.js')

const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const products = await productController.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/add', productController.addProduct);

router.delete('/delete/:id', productController.removeOneProduct);
    


module.exports = router;