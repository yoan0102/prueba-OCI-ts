import { check } from 'express-validator';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { isAdminRole } from '../../../../shared/middlewares/isAdminRole';
import { jwtValid } from '../../../../shared/middlewares/jwtValid.middleware';
import { issetCirculoID } from './issetCirculoId.validation';

export const validateRouteGetCirculoAll = [jwtValid, validateResultError];

export const validateRouteGetCirculoByID = [
	jwtValid,
	check('id').isMongoId().withMessage('Id no válido').custom(issetCirculoID),

	validateResultError,
];

export const validateRouteCreateCirculo = [
	jwtValid,
	isAdminRole,
	check('no').isNumeric().withMessage('El No. es de tipo numerico').notEmpty().withMessage('El no es obligatorio'),
	check('name', 'EL nombre es obligatorio').notEmpty(),
	//capcacidad
	check('capacidad_total')
		.isNumeric()
		.withMessage('La capacidad total es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad total es obligatorio'),
	check('normed_capacity2')
		.isNumeric()
		.withMessage('La capacidad de 2do año es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 2do año es obligatoria'),
	check('normed_capacity3')
		.isNumeric()
		.withMessage('La capacidad de 3er año es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 3er año es obligatoria'),
	check('normed_capacity4', 'La capacidad de 4to año es obligatoria')
		.isNumeric()
		.withMessage('La capacidad de 4to año es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 4to año es obligatoria'),
	check('normed_capacity5')
		.isNumeric()
		.withMessage('La capacidad de 5to año es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 5to año es obligatoria'),
	check('normed_capacity6')
		.isNumeric()
		.withMessage('La capacidad de 6to año es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 6to año es obligatoria'),
	//Matricula
	check('matricula_total')
		.isNumeric()
		.withMessage('La matricula total es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula total es obligatoria'),
	check('matricula2', 'La matricula de 2do año es obligatoria')
		.isNumeric()
		.withMessage('La matricula de 2do  año es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 2do año es obligatoria'),
	check('matricula3')
		.isNumeric()
		.withMessage('La matricula de 3er año es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 3er año es obligatoria'),
	check('matricula4', 'La matricula de 4to año es obligatoria')
		.isNumeric()
		.withMessage('La matricula de 4to año es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 4to año es obligatoria'),
	check('matricula5')
		.isNumeric()
		.withMessage('La matricula de 5to año  es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 5to año es obligatoria'),
	check('matricula6')
		.isNumeric()
		.withMessage('La matricula de 6to año  es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 6to año es obligatoria'),
	//asistencia
	check('porciento_asistencia2')
		.isNumeric()
		.withMessage('El  porciento de asistencia 2do año es de tipo numerico')
		.notEmpty()
		.withMessage('El  porciento de asistencia 2do año es obligatoria'),
	check('porciento_asistencia3')
		.isNumeric()
		.withMessage('El  porciento de asistencia 3er año es de tipo numerico')
		.notEmpty()
		.withMessage('El  porciento de asistencia 3er año es obligatoria'),
	check('porciento_asistencia4')
		.isNumeric()
		.withMessage('El  porciento de asistencia 4to año es de tipo numerico')
		.notEmpty()
		.withMessage('El  porciento de asistencia 4to año es obligatoria'),
	check('porciento_asistencia5')
		.isNumeric()
		.withMessage('El  porciento de asistencia 5to año es de tipo numerico')
		.notEmpty()
		.withMessage('El  porciento de asistencia 5to año es obligatoria'),
	check('porciento_asistencia6')
		.isNumeric()
		.withMessage('El  porciento de asistencia 6to año es de tipo numerico')
		.notEmpty()
		.withMessage('El  porciento de asistencia 6to año es obligatoria'),
	validateResultError,
];

export const validateRouteUpdateCirculo = [
	jwtValid,
	isAdminRole,
	check('id').isMongoId().withMessage('ID no valido').custom(issetCirculoID),
	validateResultError,
];

export const validateRouteRemoveCirculo = [
	jwtValid,
	isAdminRole,
	check('id').isMongoId().withMessage('ID no es valido').custom(issetCirculoID),
	validateResultError,
];
