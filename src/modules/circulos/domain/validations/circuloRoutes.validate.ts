import { NextFunction, Request, Response } from 'express';
import { check, validationResult } from 'express-validator';

const validateResultError = (req: Request, res: Response, next: NextFunction) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

export const validateRouteGetCirculoByID = [
	// check('id').custom(issetUserId),
	check('id').isMongoId().withMessage('Id no válido'),
	validateResultError,
];

export const validateRouteCreateCirculo = [
	// jwtValid,
	// isAdminRole
	check('no').isNumeric().withMessage('El no es de tipo numerico').notEmpty().withMessage('El no es obligatorio'),
	check('name', 'EL nombre es obligatorio').notEmpty(),
	check('capacidad_total')
		.isNumeric()
		.withMessage('La capacidad total es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad total es obligatorio'),
	check('normed_capacity2')
		.isNumeric()
		.withMessage('La capacidad de 2do ano es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 2do ano es obligatoria'),
	check('normed_capacity3')
		.isNumeric()
		.withMessage('La capacidad de 3er ano es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 3er ano es obligatoria'),
	check('normed_capacity4', 'La capacidad de 4to ano es obligatoria')
		.isNumeric()
		.withMessage('La capacidad de 4to ano es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 4to ano es obligatoria'),
	check('normed_capacity5')
		.isNumeric()
		.withMessage('La capacidad de 5to ano es de tipo numerico')
		.notEmpty()
		.withMessage('La capacidad de 5to ano es obligatoria'),
	check('matricula_total')
		.isNumeric()
		.withMessage('La matricula total ano es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula total es obligatoria'),
	check('matricula2', 'La matricula de 2do ano es obligatoria')
		.isNumeric()
		.withMessage('La matricula de 2do ano ano es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 2do ano es obligatoria'),
	check('matricula3')
		.isNumeric()
		.withMessage('La matricula de 3ro ano ano es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 3ro ano es obligatoria'),
	check('matricula4', 'La matricula de 4to ano es obligatoria')
		.isNumeric()
		.withMessage('La matricula de 4to ano ano es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 4to ano es obligatoria'),
	check('matricula5')
		.isNumeric()
		.withMessage('La matricula de 5to ano ano es de tipo numerico')
		.notEmpty()
		.withMessage('La matricula de 5to ano es obligatoria'),
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
	validateResultError,
];
