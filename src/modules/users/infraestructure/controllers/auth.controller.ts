import { Request, Response } from 'express';
import * as AuthService from '../../application/auth.service';

export const login = async (req: Request, res: Response) => {
	try {
		const { nick_name, password } = req.body;

		const resp = await AuthService.login(nick_name, password);
		if (!resp) return res.status(404).json({ error: 'Usuario no existe' });
		return res.json({
			...resp,
		});
	} catch (error: any) {
		res.status(500).json({
			msg: 'Hable con el administrador',
		});
	}
};
