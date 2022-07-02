const CategoryController = require('../controllers/category');
const router = require('express').Router();

router.get('/listCategory', CategoryController.getAll);
router.get('/listCategory/:name', CategoryController.getByName);
router.post('/createCategory', CategoryController.create);
router.put('/updateCategory/:id', CategoryController.update);
router.delete('/deleteCategory/:id', CategoryController.delete);

module.exports = router;