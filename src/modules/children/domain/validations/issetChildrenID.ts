import Children from '../../infraestructure/datasource/Children.model';

export const issetChildrenID = async (value: string) => {
	const children = await Children.findOne({ nick_name: value });

	if (!children) {
		throw new Error('User no existe');
	}
};
