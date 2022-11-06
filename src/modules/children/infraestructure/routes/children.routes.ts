import { Router } from 'express';

import {
	createChildren,
	getChildrenAll,
	getChildrenById,
	removeChildrenById,
	updateChildrenById,
} from '../controllers/children.controller';
import {
	validateRouteGetCirculoByID,
	validateRouteCreateCirculo,
	validateRouteRemoveCirculo,
	validateRouteUpdateCirculo,
} from '../../domain/validations/childrenRoutes.validate';

const router = Router();

router.get('/', getChildrenAll);

router.get('/:id', validateRouteGetChildrenByID, getChildrenById);

router.post('/', validateRouteCreateChildren, createChildren);

router.patch('/:id', validateRouteUpdateChildren, updateChildrenById);

router.delete('/:id', validateRouteRemoveChildren, removeChildrenById);

export default router;
