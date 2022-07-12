const tipoController = require('../../controllers/inventory/tipo');
const router = require('express').Router();

router.get('/listTipo', tipoController.getAll);
router.get('/list/:nombre', tipoController.getByName);
router.post('/createTipo', tipoController.create);
router.put('/updateTipo/:id', tipoController.update);
router.delete('/deleteTipo/:id', tipoController.delete);

router.put('/assignTipo/:id', tipoController.assignTipo);
router.put('/removeTipo/:id', tipoController.removeTipo);


module.exports = router;