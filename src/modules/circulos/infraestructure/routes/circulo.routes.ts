import { Router } from 'express';

import { createCirculo, getCirculoAll, getCirculoById, removeCirculoById, updateCirculoById } from '../controllers/circulo.controller';
import {
  validateRouteGetCirculoByID,
  validateRouteCreateCirculo,
  validateRouteRemoveCirculo,
  validateRouteUpdateCirculo
} from '../../domain/validations/circuloRoutes.validate';

const router = Router();

router.get('/', getCirculoAll);

router.get('/:id', validateRouteGetCirculoByID, getCirculoById);

router.post('/',validateRouteCreateCirculo, createCirculo);

router.patch('/:id', validateRouteUpdateCirculo, updateCirculoById);

router.delete('/:id', validateRouteRemoveCirculo, removeCirculoById);




export default router