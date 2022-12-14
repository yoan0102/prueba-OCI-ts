import { check } from 'express-validator';
import { isAdminRole } from '../../../../shared/middlewares/isAdminRole';
import { jwtValid } from '../../../../shared/middlewares/jwtValid.middleware';
import { validateResultError } from '../../../../shared/validations/validateResultError';
import { issetChildrenID } from './issetChildrenID';

export const validateRouteGetChildrenAll = [jwtValid, validateResultError];

export const validateRouteGetChildrenByID = [
	jwtValid,
	check('id').isMongoId().withMessage('Id no válido').custom(issetChildrenID),
	validateResultError,
];

export const validateRouteCreateChildren = [
	jwtValid,
	isAdminRole,
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
		.withMessage('El numero de identidad debe tener 11 caracteres')
		.notEmpty()
		.withMessage('El numero de identidad es obligatorio'),
	check('age')
		.isNumeric()
		.withMessage('La edad es un numero')
		.isLength({ min: 1, max: 5 })
		.withMessage('la edad debe estar entre 1 y 5')
		.notEmpty()
		.withMessage('La edad es obligatoria'),
	check('year_of_life')
		.isNumeric()
		.withMessage('El año de vida es un numero')
		.isIn(['2', '3', '4', '5', '6'])
		.withMessage('EL año de vida solo pueden ser 2,3,4,5 y 6')
		.notEmpty()
		.withMessage('El año de vida es obligatorio'),
	check('sex')
		.isString()
		.withMessage('El sexo es un texto')
		.isIn(['femenino', 'masculino'])
		.withMessage('el sexo solo puede ser masculino o femenino')
		.notEmpty()
		.withMessage('El sexo es obligatorio'),
	check('street')
		.isString()
		.withMessage('La calle donde vive el niño es un texto')
		.notEmpty()
		.withMessage('La calle donde vive el niño es obligatoria'),
	check('between')
		.isString()
		.withMessage('Las entre calles de donde vive el niño es un texto')
		.notEmpty()
		.withMessage('Las entre calles de donde vive el niño son obligatorias'),
	check('house').isString().withMessage('El numero de casa donde vive el niño es un texto'),
	check('stair').isString().withMessage('El numero de escalera de edificio donde vive el niño es un texto'),
	check('locality')
		.isString()
		.withMessage('La localidad donde vive el niño es un texto')
		.notEmpty()
		.withMessage('La localidad donde vive el niño es obligatoria'),
	check('cPopular')
		.isString()
		.withMessage('El consejo popular donde vive el niño es un texto')
		.notEmpty()
		.withMessage('El consejo popular donde vive el niño es obligatorio'),
	check('municipality')
		.isString()
		.withMessage('El municipo donde vive el niño es un texto')
		.notEmpty()
		.withMessage('El municipio donde vive el niño es obligatorio'),
	check('province').isString().withMessage('La provincia donde vive el niño es un texto'),
	check('parents.fullNameParent')
		.isString()
		.withMessage('El nombre del padre es un texto')
		.notEmpty()
		.withMessage('El nombre del padre es obligatorio'),
	check('parents.phoneNumberParent')
		.isString()
		.withMessage('EL numero de telefono no es valido')
		.notEmpty()
		.withMessage('El numero de telefono es obligatorio'),
	check('parents.occupation')
		.isIn(['trabajador', 'jubilado', 'asistenciado'])
		.withMessage('La ocupacion no es valida')
		.notEmpty()
		.withMessage('La ocupacion es obligatoria'),
	check('parents.convivencia')
		.isBoolean()
		.withMessage('La convivencia es un boolean')
		.notEmpty()
		.withMessage('La convivencia es obligatoria'),
	check('parents.work')
		.isString()
		.withMessage('El nombre del trabajo es un texto')
		.notEmpty()
		.withMessage('El nombre del trabajo es obligatorio'),
	check('parents.workAddress')
		.isString()
		.withMessage('La direccion del trabajo es un texto')
		.notEmpty()
		.withMessage('La direccion del trabajo es obligatoria'),
	check('parents.organismo')
		.isString()
		.withMessage('El organismo al que pertenece el trabajo es un texto')
		.notEmpty()
		.withMessage('El organismo al que pertenece el trabajo es obligatorio'),
	check('circulo').isMongoId().withMessage('El circulo es un id de mongo'),
	validateResultError,
];

export const validateRouteUpdateChildren = [
	jwtValid,
	isAdminRole,
	check('id', 'ID no valido').isMongoId(),
	check('nameChildren').isString().withMessage('El nombre es un texto'),
	check('lastNameChildren').isString().withMessage('El primer apellido es un texto'),
	check('lastNameChildren2').isString().withMessage('El segundo apellido es un texto'),
	check('noIdentity')
		.isNumeric()
		.withMessage('El numero de identidad es un numero')
		.isLength({ min: 11, max: 11 })
		.withMessage('El numero de identidad debe tener 11 caracteres'),
	check('age')
		.isNumeric()
		.withMessage('La edad es un numero')
		.isLength({ min: 1, max: 5 })
		.withMessage('la edad debe estar entre 1 y 5'),
	check('year_of_life')
		.isNumeric()
		.withMessage('El año de vida es un numero')
		.isIn(['2', '3', '4', '5', '6'])
		.withMessage('EL año de vida solo pueden ser 2,3,4,5 y 6'),
	check('sex')
		.isString()
		.withMessage('El sexo es un texto')
		.isIn(['femenino', 'masculino'])
		.withMessage('el sexo solo puede ser masculino o femenino'),
	check('street').isString().withMessage('La calle donde vive el niño es un texto'),
	check('between').isString().withMessage('Las entre calles donde vive el niño es un texto'),
	check('house').isString().withMessage('El numero de casa donde vive el niño es un texto'),
	check('stair').isString().withMessage('El numero de escalera de edificio donde vive el niño es un texto'),
	check('locality').isString().withMessage('La localidad donde vive el niño es un texto'),
	check('cPopular').isString().withMessage('El consejo popular donde vive el niño es un texto'),
	check('municipality').isString().withMessage('El municipo donde vive el niño es un texto'),
	check('province').isString().withMessage('La provincia donde vive el niño es un texto'),
	check('circulo').isMongoId().withMessage('El circulo es un id de mongo').custom(issetChildrenID),
	validateResultError,
];

export const validateRouteRemoveChildren = [
	jwtValid,
	isAdminRole,
	check('id', 'ID no es valido').isMongoId().custom(issetChildrenID),
	validateResultError,
];
