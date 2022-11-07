import User from '../infraestructure/datasource/User.model';
import { generateToken } from './utils/generateToken';

export const login = async (nickname: string, password: string) => {
	try {
		const user = await User.findOne({ nickname });

		const validPassword = await user?.comparePasswords(password);
		if (!validPassword) {
			throw new Error('Contraseña no valida');
		}

		if (user?.status === false) {
			throw new Error(`El usuario ${nickname} no existe`);
		}

		const token = generateToken(user?._id);

		return { token, user };
	} catch (error) {
		console.log(error);
	}
};
