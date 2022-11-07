import Role from '../../infraestructure/datasource/Role.model';

export const issetRoleValido = async (value: string) => {
	const role = await Role.find({ role: value });

	if (role.length === 0) {
		throw new Error('El Role no exste');
	}
};
