import { check } from 'express-validator';
import { isAdminRole } from '../../../../shared/middlewares/isAdminRole';
import { jwtValid } from '../../../../shared/middlewares/jwtValid.middleware';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { issetSubmisionId } from './issetSubmision.validation.';

export const validateRouteGetSubmisionAll = [jwtValid, validateResultError];

export const validateRouteGetSubmisionByID = [
	jwtValid,
	check('id').isMongoId().withMessage('Id no válido').custom(issetSubmisionId).withMessage('Planilla no existe'),
	validateResultError,
];

export const validateRouteCreateSubmision = [
	jwtValid,
	isAdminRole,
	check('children')
		.isMongoId()
		.withMessage('EL nino es un id de mongodb')
		.notEmpty()
		.withMessage('El nino es obligatorio'),
	check('noEntry')
		.isNumeric()
		.withMessage('El numero de entrada es numerico')
		.notEmpty()
		.withMessage('El numero de entrada es requerido'),
	check('type').isIn(['nueva', 'traslado']).withMessage('El tipo no es valido'),
	check('social_case').isBoolean().withMessage('El caso social es un boolean'),
	check('motive').isString(),
	validateResultError,
];

export const validateRouteUpdateSubmision = [
	jwtValid,
	isAdminRole,
	check('id', 'Id no valido').isMongoId().custom(issetSubmisionId),
	check('children').isMongoId().withMessage('EL nino es un id de mongodb'),
	check('noEntry').isNumeric().withMessage('El numero de entrada es numerico'),
	check('type').isIn(['nueva', 'traslado']).withMessage('El tipo no es valido'),
	check('social_case').isBoolean().withMessage('El caso social es un boolean'),
	check('motive').isString(),
	validateResultError,
];

export const validateRouteRemoveSubmision = [
	jwtValid,
	isAdminRole,
	check('id', 'ID no es valido').isMongoId().custom(issetSubmisionId),
	validateResultError,
];
