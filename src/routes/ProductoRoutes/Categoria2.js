const categoriaController = require('../../controllers/ProductoController/Categoria2');
const router = require('express').Router();
const {validateCreate} = require('../../validator/Categoria2');

router.get('/listCat', categoriaController.getAll);
router.get('/listCatNombre/:nombre', categoriaController.getByName);
router.post('/createCat', validateCreate, categoriaController.create);
router.get('/listCatActive', categoriaController.getActive);
router.put('/updateCat/:id', validateCreate,categoriaController.update);
router.delete('/deleteCat/:id', categoriaController.delete);
router.put('/updateCatActive/:id', categoriaController.updateActive);

module.exports = router;