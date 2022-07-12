const productSiipiController = require('../../controllers/inventory/productSiipiController');
const router = require('express').Router();


router.get('/listProductSiipi', productSiipiController.getAll);
router.get('/listProductSiipi/:name', productSiipiController.getByName);
router.post('/createProductSiipi', productSiipiController.create);
router.put('/updateProductSiipi/:id', productSiipiController.update);
router.delete('/deleteProductSiipi/:id', productSiipiController.delete);
router.get ('/getProductByCode/:code', productSiipiController.getByCode);
router.get ('/getProductByCategory/:category', productSiipiController.getByCategory);


module.exports = router;
