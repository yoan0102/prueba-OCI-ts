import { Router } from 'express';

import { createUser, getUserAll, getUserById, removeUserById, updateUserById } from '../controllers/user.controller';
import {
  validateRouteGetUserByID,
  validateRouteCreateUser,
  validateRouteRemoveUser,
  validateRouteUpdateUser
} from '../../domain/validations/userRoutes.validate';

const router = Router();

router.get('/', getUserAll);

router.get('/:id', validateRouteGetUserByID, getUserById);

router.post('/',validateRouteCreateUser, createUser);

router.patch('/:id', validateRouteUpdateUser, updateUserById);

router.delete('/:id', validateRouteRemoveUser, removeUserById);




export default router