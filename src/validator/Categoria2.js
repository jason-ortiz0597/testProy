const {check} = require('express-validator');
const {validateResult} = require('../helper/validateHelper');

const validateCreate = [
    check('nombre').not().isEmpty()
    .withMessage('El nombre es requerido')
    .custom((value) => {
       if (value.length > 50) {
           throw new Error('El nombre no puede tener mas de 50 caracteres');
       }
       return true;

    })
    .custom((value) => {
        if (value.length < 3) {
            throw new Error('El nombre debe tener al menos 3 caracteres');
        }
        return true;
    }),
    
    check('descripcion').not().isEmpty()
    .withMessage('La descripción es requerida')
    .custom((value) => {
         if (value.length > 50) {
                throw new Error('La descripción no puede tener mas de 50 caracteres');
            }
            return true;
    })
    .custom((value) => {
        if (value.length < 3) {
            throw new Error('La descripción debe tener al menos 3 caracteres');
        }
        return true;
    }),
    
    (req, res, next) => validateResult(req, res, next)
    
];

module.exports = { validateCreate };