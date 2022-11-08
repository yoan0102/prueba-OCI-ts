import Role from '../modules/users/infraestructure/datasource/Role.model';

export const roleSeeder = async () => {
	const roles: string[] = ['ADMIN_ROLE', 'USER_ROLE'];
	try {
		await Role.deleteMany();
		roles.forEach(async (role) => {
			await Role.create({ role: role });
		});
		console.log(`Se crearon los seeders 🔥🔥🔥`);
	} catch (error: any) {
		console.log(error.message);
		console.log(`Error al crear los seeders 😱😱😱`);
	}
};
