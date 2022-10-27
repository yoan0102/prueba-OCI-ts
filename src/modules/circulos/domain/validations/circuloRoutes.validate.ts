import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

const validateResultError = (req: Request, res: Response, next: NextFunction) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}


export const validateRouteGetCirculoByID = [
  // check('id').custom(issetUserId),
  check('id').isMongoId().withMessage('Id no válido'),
  validateResultError
];

export const validateRouteCreateCirculo = [
  // jwtValid,
  // isAdminRole,
  check('no', 'El no es obligatorio').notEmpty(),
  check('name', 'EL nombre es obligatorio').notEmpty(),
  check('capacidad_total', 'La capacidad es obligatoria').notEmpty(),
  check('normed_capacity2', 'La capacidad de 2do ano es obligatoria').notEmpty(),
  check('normed_capacity3', 'La capacidad de 3er ano es obligatoria').notEmpty(),
  check('normed_capacity4', 'La capacidad de 4to ano es obligatoria').notEmpty(),
  check('normed_capacity5', 'La capacidad de 5to ano es obligatoria').notEmpty(),
  check('matricula_total', 'La capacidad total es obligatoria').notEmpty(),
  check('matricula_2', 'La capacidad de 2do ano es obligatoria').notEmpty(),
  check('matricula_3', 'La capacidad de 5ro ano es obligatoria').notEmpty(),
  check('matricula_4', 'La capacidad de 4to ano es obligatoria').notEmpty(),
  check('matricula_5', 'La capacidad de 5to ano es obligatoria').notEmpty(),
  // check('id').custom(issetCirculoId),
  validateResultError,
];


export const validateRouteUpdateCirculo = [
  // jwtValid,
  // isAdminRole,
  check('id', 'ID no valido').isMongoId(),
  validateResultError,
];


export const validateRouteRemoveCirculo = [
		// jwtValid,
		// isAdminRole,
		check('id', 'ID no es valido').isMongoId(),
		// check('id').custom(issetCirculoId),
		validateResultError
]
   