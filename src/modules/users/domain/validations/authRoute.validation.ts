import { check } from 'express-validator';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { issetNickName } from './issetNickName.valitation';

export const validateRouteLogin = [
	check('nick_name').notEmpty().withMessage('El nickname es obligatorio').custom(issetNickName),
	check('password', 'La contraseña es obligatoria y debe tener más de 5 caracteres').isLength({ min: 6 }),
	validateResultError,
];
