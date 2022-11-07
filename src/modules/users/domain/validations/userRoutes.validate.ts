import { check } from 'express-validator';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { issetNickName } from './issetNickName.valitation';
import { issetRoleValido } from './issetRoleValido.validation';
import { issetUserId } from './issetUserId.validation';

export const validateRouteGetUserByID = [
	check('id').isMongoId().withMessage('Id no válido').custom(issetUserId),
	validateResultError,
];

export const validateRouteCreateUser = [
	check('nick_name')
		.notEmpty()
		.withMessage('El nickname es obligatorio')
		.not()
		.custom(issetNickName)
		.withMessage('El usuario no existe'),
	check('first_name', 'EL nombre es obligatorio').notEmpty(),
	check('last_name', 'EL apellido es obligatorio').notEmpty(),
	check('password', 'La contraseña es obligatoria y debe tener más de 5 caracteres').isLength({ min: 6 }),
	check('position', 'El cargo que ocupa en su empresa es obligatorio').notEmpty(),
	check('role').isIn(['ADMIN_ROLE', 'USER_ROLE']).withMessage('No es un role permitido').custom(issetRoleValido),
	validateResultError,
];

export const validateRouteUpdateUser = [
	// jwtValid,
	// isAdminRole,
	check('id', 'ID no valido').isMongoId().custom(issetUserId),
	validateResultError,
];

export const validateRouteRemoveUser = [
	// jwtValid,
	// isAdminRole,
	check('id', 'ID no es valido').isMongoId().custom(issetUserId),
	validateResultError,
];
