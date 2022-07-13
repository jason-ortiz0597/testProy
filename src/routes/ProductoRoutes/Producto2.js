const productoController = require('../../controllers/ProductoController/Producto2');
const router = require('express').Router();
const {validateCreate} = require('../../validator/Producto2');


router.get('/listProduct', productoController.getAll);
router.post('/createProduct', validateCreate, productoController.create);

module.exports = router;