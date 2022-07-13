const subCategoryController = require('../controllers/subCategory');
const router = require('express').Router();

router.get('/listSubCat', subCategoryController.getAll);
//router.get('/listSubCat/:name', subCategoryController.getByName);
router.post('/createSubCat', subCategoryController.create);
//router.put('/updateSubCat/:id', subCategoryController.update);
router.delete('/deleteSubCat/:id', subCategoryController.delete);
//router.get('/listSubCatActive', subCategoryController.getActive);
//router.put('/updateSubCatActive/:id', subCategoryController.updateActive);
module.exports = router;
