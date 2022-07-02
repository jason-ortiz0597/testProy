const productController = require('../controllers/product');
const router = require('express').Router();

router.get('/listProduct', productController.getAll);
router.get('/listProduct/:name', productController.getByName);
router.post('/createProduct', productController.create);
router.put('/updateProduct/:id', productController.update);
router.delete('/deleteProduct/:id', productController.delete);

module.exports = router;