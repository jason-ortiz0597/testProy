const subcategoriaController = require('../../controllers/ProductoController/Subcategoria2');
const router = require('express').Router();
const {validateCreate} = require('../../validator/Subcategoria2');

router.get('/listSub', subcategoriaController.getAll);
router.get('/listSubNombre/:nombre', subcategoriaController.getByName);
router.post('/createSub', validateCreate, subcategoriaController.create);
router.get('/listSubActive', subcategoriaController.getActive);
router.put('/updateSub/:id', validateCreate,subcategoriaController.update);
router.delete('/deleteSub/:id', subcategoriaController.delete);
router.put('/updateSubActive/:id', subcategoriaController.updateActive);

module.exports = router;