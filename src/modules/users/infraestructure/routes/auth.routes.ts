import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import { validateRouteLogin } from '../../domain/validations/authRoute.validation';

const router = Router();

router.post('/login', validateRouteLogin, AuthController.login);

export default router;
