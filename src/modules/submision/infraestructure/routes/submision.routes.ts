import { Router } from 'express';

import {
	createSubmision,
	getSubmisionAll,
	getSubmisionById,
	removeSubmisionById,
	updateSubmisionById,
} from '../controllers/submision.controller';
import {
	validateRouteGetSubmisionByID,
	validateRouteCreateSubmision,
	validateRouteRemoveSubmision,
	validateRouteUpdateSubmision,
} from '../../domain/validations/submisionRoutes.validate';

const router = Router();

router.get('/', getSubmisionAll);

router.get('/:id', validateRouteGetSubmisionByID, getSubmisionById);

router.post('/', validateRouteCreateSubmision, createSubmision);

router.patch('/:id', validateRouteUpdateSubmision, updateSubmisionById);

router.delete('/:id', validateRouteRemoveSubmision, removeSubmisionById);

export default router;
