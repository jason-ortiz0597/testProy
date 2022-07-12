const subCategoryController = require('../controllers/subCategory');
const router = require('express').Router();

router.get('/listSubCategory', subCategoryController.getAll);
//router.get('/listSubCategory/:name', subCategoryController.getByName);
router.post('/createSubCategory', subCategoryController.create);
//router.put('/updateSubCategory/:id', subCategoryController.update);
//router.delete('/deleteSubCategory/:id', subCategoryController.delete);
//delete one subCategory
router.delete('/deleteSubCategory/:id', subCategoryController.delete);
module.exports = router;
