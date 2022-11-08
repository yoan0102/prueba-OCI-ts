import { roleSeeder } from './roles.seeders';

const seedersRunner = async () => {
	await roleSeeder();
};

seedersRunner();
