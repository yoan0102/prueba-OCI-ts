import User from '../../infraestructure/datasource/User.model';

export const issetNickName = async (value: string) => {
	const user = await User.find({ nick_name: value });

	if (user.length === 0) {
		throw new Error("User doesn't exist");
	}
};
