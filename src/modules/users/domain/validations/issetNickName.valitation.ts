import User from '../../infraestructure/datasource/User.model';

export const issetNickName = async (value: string) => {
	const user = await User.findOne({ nick_name: value });

	if (!user) {
		throw new Error('User no existe');
	}
};
