import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { IRequest } from 'types';
import { JwtPayload } from 'jsonwebtoken';

export const jwtValid = (req: Request, res: Response, next: NextFunction) => {
	try {
		let token = req.headers?.authorization;

		if (!token) throw new Error('No Bearer');
		token = token.split(' ')[1];

		const payload = jwt.verify(token, process.env.SECRECT_KEY || 'secret');
		(req as IRequest).uid = (payload as JwtPayload).uid;

		next();
	} catch (error: any) {
		console.log(error.message);

		const TokenVerificationErrors: any = {
			'invalid signature': 'La firma jwt no es valida',
			'jwt expired': 'JWT expirado',
			'invalid token': 'Token no valido',
			'No Bearer': 'Utiliza formato Bearer',
			'jwt malformed': 'JWT formato no valido',
		};

		res.status(401).send({ error: TokenVerificationErrors[error.message] });
	}
};
