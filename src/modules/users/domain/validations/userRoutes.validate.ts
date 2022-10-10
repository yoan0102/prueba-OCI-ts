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


export const validateRouteGetUserByID = [
  // check('id').custom(issetUserId),
  check('id').isMongoId().withMessage('Id no válido'),
  validateResultError
];

export const validateRouteCreateUser = [
  check('nick_name', 'El nickname es obligatorio').notEmpty(),
  // check('nickname').custom(issetNickName),
  check('first_name', 'EL nombre es obligatorio').notEmpty(),
  check('last_name', 'EL apillido es obligatorio').notEmpty(),
  check('password', 'Password es obligatorio y más de 5 caracteres').isLength({ min: 6 }),
  check('position', 'La posisiton que ocupa en su empresa es obligatorio').notEmpty(),
  check('role', 'No es un role permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  // check('role').custom(issetRoleValido),
  validateResultError,
];


export const validateRouteUpdateUser = [
  // jwtValid,
  // isAdminRole,
  check('id', 'ID no valido').isMongoId(),
  // check('id').custom(issetUserId),
  validateResultError,
];


export const validateRouteRemoveUser = [
		// jwtValid,
		// isAdminRole,
		check('id', 'ID no es valido').isMongoId(),
		// check('id').custom(issetUserId),
		validateResultError
]
   