import { Router } from 'express';

import {
	createCirculo,
	getCirculoAll,
	getCirculoById,
	removeCirculoById,
	updateCirculoById,
} from '../controllers/children.controller';
import {
	validateRouteGetCirculoByID,
	validateRouteCreateCirculo,
	validateRouteRemoveCirculo,
	validateRouteUpdateCirculo,
} from '../../domain/validations/childrenRoutes.validate';

const router = Router();

router.get('/', getCirculoAll);

router.get('/:id', validateRouteGetCirculoByID, getCirculoById);

router.post('/', validateRouteCreateCirculo, createCirculo);

router.patch('/:id', validateRouteUpdateCirculo, updateCirculoById);

router.delete('/:id', validateRouteRemoveCirculo, removeCirculoById);

export default router;
