import User from '../../infraestructure/datasource/User.model';

export const issetUserId = async (id: string) => {
	const user = await User.findById({ _id: id });

	if (!user) {
		throw new Error('El usuario no existe');
	}
};
