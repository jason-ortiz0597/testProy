const categoriaController = require('../../controllers/inventory/categoria');
const router = require('express').Router();

router.get('/listCat', categoriaController.getAll);
router.get('/listCat/:name', categoriaController.getByName);
router.post('/createCat', categoriaController.create);
router.put('/updateCat/:id', categoriaController.update);
router.delete('/deleteCat/:id', categoriaController.delete);

module.exports = router;