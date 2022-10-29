import { check } from 'express-validator';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { issetNickName } from './issetNickName.valitation';
import { issetUserId } from './issetUserId.validation';

export const validateRouteGetUserByID = [
	check('id').isMongoId().withMessage('Id no válido').custom(issetUserId),
	validateResultError,
];

export const validateRouteCreateUser = [
	check('nick_name').notEmpty().withMessage('El nickname es obligatorio').custom(issetNickName),
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
	validateResultError,
];
