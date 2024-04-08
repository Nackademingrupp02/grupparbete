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

//Visa enskild produkt baserat på ID
router.get('/id/:id', getProduct);

//Visa produkter efter Kategori
router.get('/category/:category', viewProductByCategory);

//Lägg till produkt
router.post('/add', addProduct);

//Ta bort produkt
router.delete('/delete/:id', removeOneProduct);
    


module.exports = router;