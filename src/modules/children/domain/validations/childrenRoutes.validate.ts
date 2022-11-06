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

export const validateRouteGetChildrenByID = [
	// check('id').custom(issetUserId),
	check('id').isMongoId().withMessage('Id no válido'),
	validateResultError,
];

export const validateRouteCreateChildren = [
	// jwtValid,
	// isAdminRole
	check('nameChildren')
		.isString()
		.withMessage('El nombre es un texto')
		.notEmpty()
		.withMessage('El nombre es obligatorio'),
	check('lastNameChildren')
		.isString()
		.withMessage('El primer apellido es un texto')
		.notEmpty()
		.withMessage('El primer apellido es obligatorio'),
	check('lastNameChildren2')
		.isString()
		.withMessage('El segundo apellido es un texto')
		.notEmpty()
		.withMessage('El segundo apellido es obligatorio'),
	check('noIdentity')
		.isNumeric()
		.withMessage('El numero de identidad es un numero')
		.isLength({ min: 11, max: 11 })
		.withMessage('El numero de identidad tiene requiere 11 caracteres')
		.notEmpty()
		.withMessage('El numero de identidad es obligatorio'),
	check('age')
		.isNumeric()
		.withMessage('La edad es un numero')
		// .isLength({ min: 11, max: 11 })
		// .withMessage('El numero de identidad tiene requiere 11 caracteres')
		.notEmpty()
		.withMessage('La edad es obligatoria'),
	check('year_of_life')
		.isNumeric()
		.withMessage('El ano de vida es un numero')
		.isIn(['2', '3', '4', '5', '6'])
		.withMessage('EL ano de vida solo pueden ser 2,3,4,5 y 6')
		.notEmpty()
		.withMessage('El ano de vida es obligatorio'),
	check('sex')
		.isString()
		.withMessage('El sexo es un texto')
		.isIn(['femenino', 'masculino'])
		.withMessage('el sexo solo puede ser masculino o femenino')
		.notEmpty()
		.withMessage('El sexo es obligatorio'),
	check('street')
		.isString()
		.withMessage('La calle donde vive el nino es un texto')
		.notEmpty()
		.withMessage('La calle donde vive el nino es obligatoria'),
	check('between')
		.isString()
		.withMessage('Las entre calles donde vive el nino es un texto')
		.notEmpty()
		.withMessage('Las entre calles donde vive el nino son obligatorias'),
	check('house').isString().withMessage('El numero de casa donde vive el nino es un texto'),
	check('stair').isString().withMessage('El numero de escalera de edificio donde vive el nino es un texto'),
	check('locality')
		.isString()
		.withMessage('La localidad donde vive el nino es un texto')
		.notEmpty()
		.withMessage('La localidad donde vive el nino es obligatoria'),
	check('cPopular')
		.isString()
		.withMessage('El consejo popular donde vive el nino es un texto')
		.notEmpty()
		.withMessage('El consejo popular donde vive el nino es obligatorio'),
	check('municipality')
		.isString()
		.withMessage('El municipo donde vive el nino es un texto')
		.notEmpty()
		.withMessage('El municipio donde vive el nino es obligatorio'),
	check('province').isString().withMessage('La provincia donde vive el nino es un texto'),

	// check('id').custom(issetChildrenId),
	validateResultError,
];

export const validateRouteUpdateChildren = [
	// jwtValid,
	// isAdminRole,
	check('id', 'ID no valido').isMongoId(),
	check('nameChildren').isString().withMessage('El nombre es un texto'),
	check('lastNameChildren').isString().withMessage('El primer apellido es un texto'),
	check('lastNameChildren2').isString().withMessage('El segundo apellido es un texto'),
	check('noIdentity')
		.isNumeric()
		.withMessage('El numero de identidad es un numero')
		.isLength({ min: 11, max: 11 })
		.withMessage('El numero de identidad tiene requiere 11 caracteres'),
	check('age').isNumeric().withMessage('La edad es un numero'),
	// .isLength({ min: 11, max: 11 })
	// .withMessage('El numero de identidad tiene requiere 11 caracteres')
	check('year_of_life')
		.isNumeric()
		.withMessage('El ano de vida es un numero')
		.isIn(['2', '3', '4', '5', '6'])
		.withMessage('EL ano de vida solo pueden ser 2,3,4,5 y 6'),
	check('sex')
		.isString()
		.withMessage('El sexo es un texto')
		.isIn(['femenino', 'masculino'])
		.withMessage('el sexo solo puede ser masculino o femenino'),
	check('street').isString().withMessage('La calle donde vive el nino es un texto'),
	check('between').isString().withMessage('Las entre calles donde vive el nino es un texto'),
	check('house').isString().withMessage('El numero de casa donde vive el nino es un texto'),
	check('stair').isString().withMessage('El numero de escalera de edificio donde vive el nino es un texto'),
	check('locality').isString().withMessage('La localidad donde vive el nino es un texto'),
	check('cPopular').isString().withMessage('El consejo popular donde vive el nino es un texto'),
	check('municipality').isString().withMessage('El municipo donde vive el nino es un texto'),
	check('province').isString().withMessage('La provincia donde vive el nino es un texto'),
	validateResultError,
];

export const validateRouteRemoveChildren = [
	// jwtValid,
	// isAdminRole,
	check('id', 'ID no es valido').isMongoId(),
	// check('id').custom(issetCirculoId),
	validateResultError,
];
