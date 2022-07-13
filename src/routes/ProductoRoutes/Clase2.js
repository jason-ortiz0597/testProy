const claseController = require('../../controllers/ProductoController/Clase2');
const router = require('express').Router();
const {validateCreate} = require('../../validator/Clase2');

router.get('/listClase', claseController.getAll);
router.get('/listClaseNombre/:nombre', claseController.getByName);
router.post('/createClase', validateCreate, claseController.create);
router.get('/listClaseActive', claseController.getActive);
router.put('/updateClase/:id', validateCreate,claseController.update);
router.delete('/deleteClase/:id', claseController.delete);
router.put('/updateClaseActive/:id', claseController.updateActive);

module.exports = router;