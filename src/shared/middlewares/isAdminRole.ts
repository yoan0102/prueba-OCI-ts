import { NextFunction, Request, Response } from 'express';
import { IRequest } from 'types';
import User from '../../modules/users/infraestructure/datasource/User.model';
import { IUser } from '../../modules/users/domain/users';

export const isAdminRole = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await User.findById((req as IRequest).uid);
		if ((user as IUser).role !== 'ADMIN_ROLE') {
			return res.status(401).send('Necesitas permisos de Administrador');
		}
		next();
	} catch (error: any) {
		console.log(error.message);
		res.status(401).send({ error: 'Error de servidor' });
	}
};
