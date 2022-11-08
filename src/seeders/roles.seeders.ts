import Role from '../modules/users/infraestructure/datasource/Role.model';

export const roleSeeder = async () => {
	const roles: string[] = ['ADMIN_ROLE', 'USER_ROLE'];
	try {
		roles.forEach(async (role) => {
			await Role.create({ role: role });
		});
	} catch (error: any) {
		console.log(error.message);
		console.log(`Error al crear los seeders 😱😱😱`);
	}
};
