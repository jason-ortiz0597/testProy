const articuloController = require('../../controllers/inventory/articulo');
const router = require('express').Router();


router.get('/listArticulo', articuloController.getAll);
router.get('/listArticulo/:nombre', articuloController.getByName);
router.post('/createArticulo', articuloController.create);
router.put('/updateArticulo/:id', articuloController.update);
router.delete('/deleteArticulo/:id', articuloController.delete);

router.put('/assignArticulo/:id', articuloController.assignArticulo);
router.put('/removeArticulo/:id', articuloController.removeArticulo);



module.exports = router;
